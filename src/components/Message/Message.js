import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    messageUser: {
        background: '#817ED0', 
        color: '#fff', 
        margin: '0 0 20px 0',
        padding: '15px 25px',
        borderRadius: '20px', 
    }, 
    messageRobot: {
        background: '#EAECF4',
        color: '#697294', 
        margin: '0 0 20px 0',
        padding: '15px 25px',
        borderRadius: '20px', 
    }, 
    name: {
        fontWeight: '700'
    }, 
    time: {
        fontWeight: '600', 
        fontSize: '12px'
    }
})

function Message(props) {
    const classes = useStyles()

    return (
        <div className={classes[props.message.class]}>
            <Typography gutterBottom className={classes.name}>{ props.message.name }</Typography>
            <Typography gutterBottom>{ props.message.message }</Typography>
            <Typography gutterBottom className={classes.time}>{ props.message.time }</Typography>
        </div>
    )
}

export default Message