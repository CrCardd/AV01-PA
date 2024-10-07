

import Card from "@/components/card";
import Section from "@/components/section";




const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen">

      <div className="flex flex-wrap justify-center items-center gap-[30px] min-h-screen mt-[100px]">
        <Card tec={"React"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus quos in quam magni repellendus, quae ex"}/>
        <Card tec={"Tailwind"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus quos in quam magni repellendus, quae ex"}/>
        <Card tec={"Next"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus quos in quam magni repellendus, quae ex"}/>
        <Card tec={"Jquery"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus quos in quam magni repellendus, quae ex"}/>
      </div>

      <div>
        <Section tec={'React'} bool={true} text={'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'}/>
        <Section tec={'Tailwind'} bool={false} text={'ailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.'}/>
        <Section tec={'Next'} bool={true} text={'Next é uma empresa brasileira de tecnologia, que atua como fintech e operadora de cartões de crédito e débito, com sede na cidade de Osasco, no estado homônimo. Teve sua plataforma lançada em 30 de outubro de 2017 para complementar o ecossistema do Bradesco, oferecendo uma nova solução para a sociedade hiperconectada.'}/>
        <Section tec={'Jquery'} bool={false} text={'jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário. '}/>
      </div>
        
    </div>
  );
}

export default Home;