import classes from "./Head.module.css"

function Head(){
    return (
        <div className={classes.box}>
            <div className={classes.leftBox}>
                <div className={classes.logo}>
                    <span>BitMachine</span>
                </div>
                <div className={classes.menu}>
                    <span>백테스팅</span>
                </div>
            </div>
            <div className={classes.rightBox}>
                <div className={classes.registerBox}>
                    <span>회원가입</span>
                </div>
                <div className={classes.loginBox}>
                    <span>로그인</span>
                </div>
            </div>
        </div>

    )
}

export default Head
