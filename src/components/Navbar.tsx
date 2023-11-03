import { Layout, Menu, Row } from "antd"
import { FC } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"


const Navbar: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
   return (
    <Layout.Header>
        <Row justify="end">
            {isAuth
            ?
            <Menu theme="dark" mode="horizontal" selectable={false}>
                <div style={{color:"white"}}>Ochir</div>
                <Menu.Item key={1}>Выйти</Menu.Item>
           </Menu>
            :
            <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item key={1}>Логин</Menu.Item>
           </Menu>
            }
           
        </Row>
    </Layout.Header>
   )


}

export default Navbar;