
export default function Banner(){
return(
    <div className="mt-8 md:grid grid-cols-2 items-center lg:size-5/6">
    <div>
      <h1 className="font-bond--[100px]">UTFTEC</h1>
      <h3 className="text-[#00e77f]">A melhor escola de informática</h3>
      <button>Informações</button>
    </div>
    <div>
      <img src="/img/banner.svg" alt="Homem sentado" />
    </div>
  </div>
)

}