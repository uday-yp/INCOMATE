import { ArrowLeft, Construction } from 'lucide-react'
import { Link } from 'react-router-dom'

type Props = { title: string; description: string; backHref: string }

export default function ModulePlaceholder({ title, description, backHref }: Props) {
  return <div className="mx-auto flex min-h-[65vh] max-w-3xl items-center justify-center py-12"><div className="w-full rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12"><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9E6FF] text-[#7838F0]"><Construction size={25}/></span><p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7838F0]">INCOMATE module</p><h1 className="mt-2 text-3xl font-extrabold tracking-tight">{title}</h1><p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#68707A]">{description}</p><Link to={backHref} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-bold text-white"><ArrowLeft size={16}/> Back to workspace</Link></div></div>
}
