import './style/done.css'
import './style/toDo.css'
export function Done({ doneList }) {
    return (
        <>  
            <div className='done'>
            <h3 data-testid='title-test-2'>Done</h3>
                {doneList.map((element) => <div key={element} className='list-element' data-testid={element}><p>{element}</p></div>)}
            </div>
        </>
    );
}