import React from 'react'

export const LinkCard = ({ link}) =>{
    return(
        <>
        <h2>Ссылка по ID  </h2>
        <p>Ссылка <a href={link.to} target="_blank" rel="nooper noreferrer">{link.to}</a> </p>
        <p> <a href={link.from} target="_blank" rel="nooper noreferrer">{link.from}</a> </p>
        <p>Количество переходов <strong>{link.clicks}</strong> </p>
        <p> Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong> </p>
        
        </>
    )

}