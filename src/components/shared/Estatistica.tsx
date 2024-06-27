import { ElementType } from "react";

export interface EstatisticaProps {
    valor: any
    texto: string
    icone: ElementType
    iconeCor: string
}

export default function Estatistica(props: EstatisticaProps){
    return (
        <div className="flex items-center justify-between p-5 rounded-xl bg-zinc-900">
            <props.icone size={70} stroke={1} className={props.iconeCor} />
            <div className="flex flex-col items-end">
                <span className="text-3xl font-black">{props.valor}</span>
                <span className="text-sm text-zinc-400">{props.texto}</span>
            </div>
        </div>
    )
}