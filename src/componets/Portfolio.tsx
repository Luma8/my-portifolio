import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";

interface Repo {
  full_name: string;
  name: string;
  clone_url: string;
  language: string;
}

const Portfolio = () => {

  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/luma8/repos')
      .then(resp => resp.json()).then(data => {
        setRepos(data);
        console.log(data);
      }).catch(erro => {
        console.log(erro)
      })
  }, []);

  return (
    <div className="bg-[#333] p-10">
      <div className="whitespace-nowrap md:text-[35px] text-[25px] font-bold my-3 border-b-[6px] w-[100px] border-[#8DA9C4]">
        <h1>Public repositories</h1>
      </div>
      <ul className="md:flex flex-wrap">
        {repos.map((repo: Repo) => {

          const languageLowerCase = repo?.language?.toLowerCase();

          const displayLanguage = languageLowerCase === 'c#' ? 'csharp' : languageLowerCase;

          return (
            <li 
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-20 hover:bg-[#555] duration-300 bg-[#111] w-[300px] p-2 my-2 rounded-md mr-4 mb-4 flex-grow" key={repo.full_name}>
              <div className="flex justify-between items-center mb-4">
                <strong className="mr-2 overflow-hidden whitespace-nowrap text-ellipsis text-[16px]">{repo.name}</strong>
                {repo.language !== null ?
                  <img
                    className="w-[25px] rounded-[5px]"
                    src={`https://raw.githubusercontent.com/github/explore/main/topics/${displayLanguage}/${displayLanguage}.png`}
                    alt={displayLanguage}
                  /> :
                  null
                }
              </div>
              <div className="flex justify-between">
                <p className="overflow-hidden whitespace-nowrap text-ellipsis text-[12px]">
                  <span className="text-[#]">{repo.clone_url}</span>
                </p>
                <a className="ease-linear" href={repo.clone_url}>
                  <FaLink size='20px' />
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Portfolio;