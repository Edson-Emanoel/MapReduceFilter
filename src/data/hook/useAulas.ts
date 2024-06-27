import { useEffect, useState } from "react";
import Aula from "@/data/model/Aula";
import listaDeAulas from "@/data/constants/aulas";

export default function useAulas() {
    const [duracaoTotal, setDuracaoTotal] = useState<Number>(0)
    const [aulas, setAulas] = useState<Aula[]>(listaDeAulas)

    useEffect(() => {
        calcularDuracao(aulas)
    }, [aulas])

    function filtrarAulas(status: string | null) {
        const aulasFiltradas: Aula[] = listaDeAulas.filter(
        aula => aula.status === status || !status
        )
        setAulas(aulasFiltradas)
    }

    function calcularDuracao(aulas: Aula[]) {
        const duracaoTotal = aulas.reduce((acc, aula) => acc + aula.duracao, 0)
        setDuracaoTotal(duracaoTotal)
    }

    return {
        aulas,
        duracaoTotal,
        filtrarAulas,
    }
}