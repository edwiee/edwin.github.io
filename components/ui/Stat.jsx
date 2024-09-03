"use client"
import CountUp from "react-countup";
import axios from "axios";
import { useEffect, useState } from "react";

const githubUsername = "edwiee";
const stats = [
  {
    num: 0,
    text: "Open Source Projects"
  },
  {
    num: 0,
    text: "Technologies Mastered"
  },
  {
    num: 0,
    text: "Code Commits"
  },
]

function Stats() {
  const [githubStats, setGithubStats] = useState(stats);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${githubUsername}`)
      .then(response => {
        const { data } = response;
        axios.get(`https://api.github.com/users/${githubUsername}/repos`)
          .then(response => {
            const repos = response.data;
            const totalCommits = repos.reduce((acc, repo) => {
              return acc + repo.commits_url.split("{")[0].split("/").pop();
            }, 0);
            axios.get(`https://api.github.com/users/${githubUsername}/events/public`)
              .then(response => {
                const events = response.data;
                const commits = events.filter(event => event.type === "PushEvent").reduce((acc, event) => acc + event.payload.commits.length, 0);
                setGithubStats([
                  {
                    num: data.public_repos,
                    text: "Open Source Projects"
                  },
                  {
                    num: 16,
                    text: "Technologies Mastered"
                  },
                  {
                    num: commits,
                    text: "Code Commits"
                  },
                ]);
              })
              .catch(error => {
                console.error(error);
              });
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {githubStats.map((stat, index) => {
            return (
              <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                <CountUp end={stat.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}leading-snug-white/80`}>{stat.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
