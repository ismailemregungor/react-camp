import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({SignIn}) {
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={SignIn}>Giriş Yap</Button>
                <Button primary style={{ marginLeft: "0.5em" }}>Kayıt Ol</Button>
            </Menu.Item>
        </div >
    )
}
