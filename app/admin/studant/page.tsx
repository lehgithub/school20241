import ListStudent from "./List";
import NewStudent from "./New";

export default function Studant(){

    return(
        <div className="w-full flex flex-col mt-6">
            <div className="flex justify-center mb-6">
            <NewStudent/>
            
            </div>
            
            <ListStudent/>
        </div>
        
        
    )
}