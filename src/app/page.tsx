'use client'
import FiltrarStatus from "@/components/aulas/FiltrarStatus";
import ListaAulas from "@/components/aulas/ListaAulas";
import Titulo from "@/components/shared/Titulo";

import { IconClock, IconVideo } from "@tabler/icons-react";

import Estatistica from "@/components/shared/Estatistica";
import Duracao from "@/data/utils/Duracao";
import useAulas from "@/data/hook/useAulas";

export default function Home() {
  const { aulas, duracaoTotal, filtrarAulas } = useAulas()

  return (
    <div className="flex flex-col gap-10 p-10 h-screen">
      <div className="flex items-center justify-between">
        <Titulo
          icone={IconVideo}
          principal="Lista de Aulas"
          segundario="Aqui você encontra as aulas disponiveis"
        />
        <FiltrarStatus filtroMudou={filtrarAulas} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-4 gap-10">
          <Estatistica
            icone={IconClock} 
            valor={Duracao.formatar(duracaoTotal)} 
            texto="Duração Total" 
            iconeCor="text-green-500"
          />          
        </div>
        <ListaAulas aulas={aulas} />
      </div>
    </div>    
  );
}
