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
  const [currentRepo, setCurrentRepo] = useState<Repo | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [visibleItems, setVisibleItems] = useState<number>(6);

  const { t } = useTranslation();

  useEffect(() => {
    fetch('https://api.github.com/users/luma8/repos')
      .then(resp => resp.json()).then(data => {
        setRepos(data);
      }).catch(erro => {
        console.log(erro)
      })
  }, []);

  const onModalOpen = (currentData: Repo) => {
    setCurrentRepo(currentData);
    setModalOpen(true);
  }
  const onModalClose = () => {
    setCurrentRepo(null);
    setModalOpen(false);
  }

  const handleReadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  }

  return (
    <section id="portfolio" className="relative py-20 px-6 md:px-16 bg-dark-100">
      <div className="absolute top-0 left-0 w-full section-divider"></div>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">GitHub</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            {t('line10')}
          </h1>
        </div>
        {
          modalOpen && currentRepo && (
            <Modal descript={currentRepo.description ?? ''} title={currentRepo.name} onClose={onModalClose} text={t('line11')}/>
          )
        }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.slice(0, visibleItems).map((repo: Repo) => {
            const languageLowerCase = repo?.language?.toLowerCase();
            const displayLanguage = languageLowerCase === 'c#' ? 'csharp' : languageLowerCase;

            return (
              <div
                className="group glass rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 hover:border-primary/20" key={repo.full_name}>
                <div className="flex justify-between items-center mb-4">
                  <strong className="mr-2 overflow-hidden whitespace-nowrap text-ellipsis text-base group-hover:text-primary transition-colors">{repo.name}</strong>
                  {repo.language !== null ?
                    <img
                      className="w-6 h-6 rounded object-cover flex-shrink-0"
                      src={`https://raw.githubusercontent.com/github/explore/main/topics/${displayLanguage}/${displayLanguage}.png`}
                      alt={displayLanguage}
                    /> :
                    null
                  }
                </div>
                <div className="flex justify-between items-center gap-2 mb-4">
                  <p className="overflow-hidden whitespace-nowrap text-ellipsis text-xs text-white/40">
                    {repo.clone_url}
                  </p>
                  <a className="text-white/50 hover:text-primary transition-colors flex-shrink-0" href={repo.clone_url} target="_blank" rel="noopener noreferrer">
                    <FaLink size='16px' />
                  </a>
                </div>
                <button onClick={() => onModalOpen(repo)} className="btn-glow rounded-xl bg-dark-300 px-4 py-2 text-xs font-semibold text-white/70 hover:bg-primary hover:text-dark transition-all duration-300">
                  {t('line12')}
                </button>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-10">
          {repos.length > visibleItems && (
            <button onClick={handleReadMore} className="btn-glow rounded-xl border border-white/10 px-8 py-3 text-sm font-medium text-white/70 hover:border-primary/40 hover:text-primary transition-all duration-300">
              {t('line13')}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Portfolio;