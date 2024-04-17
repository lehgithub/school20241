
export default function Course(){
    return(
        <><div className="font-bold m-4">
            <h3>Conheça nossos <span class="text-[#00e77f]"> CURSOS </span></h3>
        </div><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-[#4d4d4d] rounded-md lg:rounded-lg">
                    <a href="">
                        <img src="/img/html.svg" alt="" />
                        <div>
                            <h4>CURSO DE HTML</h4>
                            <p className="mb-4">O Curso de html é oferecido ....</p>
                        </div>
                    </a>
                </div>

                <div className="bg-[#4d4d4d] rounded-md lg:rounded-lg">
                    <a href="">
                        <img src="/img/css.svg" alt="" />
                        <div>
                            <h4>CURSO DE CSS</h4>
                            <p>O Curso de css é oferecido...</p>
                        </div>
                    </a>
                </div>

                <div className="bg-[#4d4d4d] rounded-md lg:rounded-lg">
                    <a href="">
                        <img src="/img/js.svg" alt="" />
                        <div>
                            <h4>CURSO DE JS</h4>
                            <p>O Curso de js é oferecido...</p>
                        </div>
                    </a>
                </div>

                <div className="bg-[#4d4d4d] rounded-md lg:rounded-lg">
                    <a href="">
                        <img src="/img/games.svg" alt="" />
                        <div>
                            <h4>CURSO DE GAMES</h4>
                            <p>O Curso de games é oferecido...</p>
                        </div>
                    </a>
                </div>

                <div className="bg-[#4d4d4d] rounded-md lg:rounded-lg">
                    <a href="">
                        <img src="/img/design.svg" alt="" />
                        <div>
                            <h4>CURSO DE DESIGN</h4>
                            <p>O Curso de design é oferecido...</p>
                        </div>
                    </a>
                </div>

                <div className="bg-[#4d4d4d] rounded-md lg:rounded-lg">
                    <a href="">
                        <img src="/img/robot.svg" alt="" />
                        <div>
                            <h4>CURSO DE ROBOT</h4>
                            <p>O Curso de robot é oferecido...</p>
                        </div>
                    </a>
                </div>
            </div></>
    )
}