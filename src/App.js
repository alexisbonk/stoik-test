import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Calculator from "./Components/Calculator";
import History from "./Components/History";
import Tour from 'reactour'

function App() {
  const [saveForms, setSaveForms] = useState([]);
  const [formState, setFormState] = useState("");
  const [previousFormState, setPreviousFormState] = useState("");
  const [isTourOpen, setIsTourOpen] = useState(true)
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 't1'
  );
  const steps = [
    {
      selector: '.first-step',
      content: `Laissez moi vous guider 🤗`,
      style: {
        backgroundColor: theme === 't1' ? '#3a4764' : theme === 't2' ? 'white' : '#160628',
        color: theme === 't2' ? 'black' : 'white',
        fontSize: '17pt'
      },
    },
    {
      selector: '.theme-step',
      content: 'Ici vous pouvez changer de thème 🎨',
      style: {
        backgroundColor: theme === 't1' ? '#3a4764' : theme === 't2' ? 'white' : '#160628',
        color: theme === 't2' ? 'black' : 'white',
        fontSize: '17pt'
      },
    },
    {
      selector: '.touches-step',
      content: 'Evidement, un pavé numérique 😝',
      style: {
        backgroundColor: theme === 't1' ? '#3a4764' : theme === 't2' ? 'white' : '#160628',
        color: theme === 't2' ? 'black' : 'white',
        fontSize: '17pt'
      },
    },
    {
      selector: '.calcul-step',
      content: 'Mais vous pouvez aussi utiliser votre clavier 😉',
      style: {
        backgroundColor: theme === 't1' ? '#3a4764' : theme === 't2' ? 'white' : '#160628',
        color: theme === 't2' ? 'black' : 'white',
        fontSize: '17pt'
      },
    },
    {
      selector: '.history-step',
      content: `Ici sera affiché l'historique de vos dernières opérations`,
      style: {
        backgroundColor: theme === 't1' ? '#3a4764' : theme === 't2' ? 'white' : '#160628',
        color: theme === 't2' ? 'black' : 'white',
        fontSize: '17pt'
      },
    },
    {
      selector: '.replay-step',
      content: 'Vous pouvez revenir en arrière juste ici 🔙',
      style: {
        backgroundColor: theme === 't1' ? '#3a4764' : theme === 't2' ? 'white' : '#160628',
        color: theme === 't2' ? 'black' : 'white',
        fontSize: '17pt'
      },
    },
    {
      selector: '.info-step',
      content: `Et pour réafficher ces infos, c'est juste ici 😁`,
      style: {
        backgroundColor: theme === 't1' ? '#3a4764' : theme === 't2' ? 'white' : '#160628',
        color: theme === 't2' ? 'black' : 'white',
        fontSize: '17pt'
      },
    },
  ]

  useEffect(() => {
    if (saveForms.length > 10)
      setSaveForms(saveForms.splice(1, 11))
  }, [formState]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.id = theme;
  }, [theme]);

  const handleChangeTheme = () => {
    if (theme === 't2') {
      setTheme('t3');
    } else if (theme === 't1') {
      setTheme('t2');
    } else {
      setTheme('t1');
    }
  }

  return (
    <div className="">
      <Header 
        theme={theme} 
        handleChangeTheme={handleChangeTheme} 
        previousFormState={previousFormState}
        setFormState={setFormState}
        setIsTourOpen={setIsTourOpen}
      />
      <History
        theme={theme} 
        saveForms={saveForms}
        setFormState={setFormState}
      />
      <Calculator 
        handleChangeTheme={handleChangeTheme}
        formState={formState}
        previousFormState={previousFormState}
        saveForms={saveForms}
        setFormState={setFormState}
        setPreviousFormState={setPreviousFormState}
        setSaveForms={setSaveForms}
      />
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)} 
      />
    </div>
  );
}

export default App;
