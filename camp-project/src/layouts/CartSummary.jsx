import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'


export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    <Dropdown.Item>Acer Notebook</Dropdown.Item>
                    <Dropdown.Item>Asus Notebook</Dropdown.Item>
                    <Dropdown.Item>Dell Notebook</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as = {NavLink} to = "/cart">Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
