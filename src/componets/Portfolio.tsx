/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Modal from "./modal";

interface Repo {
  full_name: string;
  name: string;
  clone_url: string;
  language: string;
  description?: string;
}

const Portfolio = () => {

  const [repos, setRepos] = useState<Repo[]>([]);
  const [currentRepo, setCurrentRepo] = useState<Repo | Repo[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [visibleItems, setVisibleItems] = useState<number>(6);

  const { t } = useTranslation();

  useEffect(() => {
    fetch('https://api.github.com/users/luma8/repos')
      .then(resp => resp.json()).then(data => {
        setRepos(data);
        console.log(data);
      }).catch(erro => {
        console.log(erro)
      })
  }, []);

  const onModalOpen = (currentData: Repo) => {
    setCurrentRepo(currentData);
    setModalOpen(true);
  }
  const onModalClose = () => {
    setCurrentRepo([]);
    setModalOpen(false);
  }

  const handleReadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  }

  return (
    <div className="bg-[#333] p-10">
      <div className="whitespace-nowrap md:text-[35px] text-[25px] font-bold my-3 border-b-[6px] w-[100px] border-[#8DA9C4]">
        <h1>{t('line10')}</h1>
      </div>
      {
        modalOpen && (
          <div>
            {/* @ts-expect-error */}
            <Modal descript={currentRepo.description} title={currentRepo.name} onClose={onModalClose} text={t('line11')}/>
          </div>
        )
      }
      <ul className="md:flex flex-wrap">
        {repos.slice(0, visibleItems).map((repo: Repo) => {
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
              <div className="my-2">
                <button onClick={() => onModalOpen(repo)} className="rounded-md bg-[#222] p-2 text-[12px] font-bold hover:bg-[#8DA9C4] hover:text-[#111]">
                  {t('line12')}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="text-center my-2">
        {repos.length > visibleItems && (
          <button onClick={handleReadMore} className="rounded-md bg-[#222] p-2 text-[15px] hover:bg-[#8DA9C4] hover:text-[#111]">
            {t('line13')}
          </button>
        )}
      </div>
    </div>
  )
}

export default Portfolio;