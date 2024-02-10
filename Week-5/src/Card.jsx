
export function Card({name, description, intrests,linkedin, twitter,otherSocial}){
    return <div style={Styles.card}>
            <h2 style={Styles.name}>{name}</h2>
            <p style={Styles.description}>{description}</p>
            <h5 style={Styles.intrestHeader}>Intrests</h5>
            <ul style={Styles.intrestList}>
                {intrests.map((intrest)=>{
                   return <li style={Styles.interestItem} key={intrest}>{intrest}</li>
                })}
            </ul>
            <div style={Styles.socialHandels}>
            <div style={Styles.buttons}>
                <a href={linkedin}  style={Styles.handles} rel="noopener noreferrer" target="_blank"  >LinkedIn</a>
            </div>
            <div style={Styles.buttons}>
                <a style={Styles.handles} href={twitter}  rel="noopener noreferrer" target="_blank">Twitter</a>
            </div>
            <div style={Styles.buttons}>
                <a style={Styles.handles} href={otherSocial}  rel="noopener noreferrer"target="_blank">Others</a>
            </div>
            </div>
    </div>
}

const Styles = {
    card:{
        border:'1px solid #ddd',
        borderRadius:'8px',
        maxWidth:'400px',
        padding:'20px',
        margin:'20px',
        boxShadow:'0px 8px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#FCFBF4'
    },
    name:{
        fontSize:'24px',
        marginBottom:'10px',
        color:'#3A3B3C'
    },
    description:{
        fontSize:'18px',
        marginBottom:'10px',
        color:'#3A3B3C'
    },
    socialHandels:{
        display: 'flex',
        margin: '10px'
    }
    ,
    buttons:{
        border: '1.5px solid #ddd',
        maxWidth: '100px',
        backgroundColor:'#007BFF',
        borderRadius:'3px',
        textAlign: 'center',
        margin:'10px'
    },
    handles:{
        color:'#fff',
        padding:'10px 15px',
        textDecoration:'none'
    },
    intrestHeader:{
        fontSize:'18px',
        color:'#333',
        marginBottom:'10px'
    },
    intrestList:{
        listStyle:'none',
        padding:0,
        margin:0
    },
    interestItem: {
        fontSize: '14px',
        marginBottom: '5px',
        color: '#555',
      },
}

