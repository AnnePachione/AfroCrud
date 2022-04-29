import './styles.scss';

export function Status ({ isActive }) {
    return ( // a lógica abaixo é uma pergunta, se estiver ativo, vai valer o active, se inativo vai valer o inactive
    <div className={isActive ? 'status-active' : 'status-inactive'}>  
        <p>{isActive ? 'Ativo' : 'Inativo'}</p>
    </div> 
    )
}