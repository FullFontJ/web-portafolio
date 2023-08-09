

function Menu(){
    return (<>
        <header className="bg-stone-900 text-white" >
            <nav className="flex flex-wrap items-center mx-auto max-w-screen-xl p-6">
                <div ><p className="font-bold text-2xl mr-8">FullFontJ</p></div>
                <ul className="flex gap-8 ml-10">
                    <li><a href="#about" className="hover:text-gray-400 hover:font-bold">About</a></li>
                    <li><a href="#project" className="hover:text-gray-400 hover:font-bold">Proyecto</a></li>
                </ul>
            </nav>
        </header>

        
    </>);
}


export default Menu;