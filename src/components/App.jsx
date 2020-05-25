import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ExamsModal from './ExamModal';
import RegisterForm from './RegisterForm';
import '../styles/components/App.styl';

const App = () => {
   const info = {
    exams: [
      {
        id: 1,
        name: 'Examen de Sangre',
      },
      {
        id: 2,
        name: 'Examen de Orina',
      },
      {
        id: 3,
        name: 'Examen de Otra cosa',
      },
    ],
  };
  return (
    <div>
      <Header user="Administrador" userName="Fulanito González" />
      <ExamsModal exams={info.exams} />
      <RegisterForm user="medico" />
      <Footer clinicalName="In Vitro" />
    </div>
  );
};

export default App;
