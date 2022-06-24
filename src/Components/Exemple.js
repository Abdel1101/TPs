import React from 'react'
import styles from './Exemple.module.css'

class Exemple extends React.Component {
    render(){
        return(
            <div className={styles.divstyle}>   
                <h3 className={styles.textstyle}>Encore salut !!!</h3>
            </div>
        )
    }
}

export default Exemple