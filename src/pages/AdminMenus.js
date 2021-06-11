import React, {useEffect} from 'react';
import AdminLayout from "../components/AdminLayout";
import {updateState, saveMenu, getMenus} from "../redux/actions/menusAction";
import {connect} from "react-redux";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AvForm, AvField} from "availity-reactstrap-validation";

const AdminMenus = (props) => {

    // const openModal = () => {
    //     // this.setState({open: !this.state.open})
    //     props.updateState({open: !props.open})
    // };
    useEffect(() => {
        props.getMenus();
    }, [])

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    console.log(generateUrl("Bugun Toshkent Shahrida Svet o'chadi"))
    return (
        <AdminLayout history={props.history}>
            <button type="button" className="btn btn-success d-block ml-auto"
                    onClick={() => props.updateState({open: !props.open})}>Add
            </button>

            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Name (uz)</th>
                    <th>Name (ru)</th>
                    <th>Name (en)</th>
                    <th>Url</th>
                    <th>Submenu</th>
                    <th>Parent Menu</th>
                </tr>
                </thead>
                <tbody>
                {props.menus.map((item, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.nameUz}</td>
                            <td>{item.nameRu}</td>
                            <td>{item.nameEn}</td>
                            <td>{item.url}</td>
                            <td>{item.submenu ? "Submenu" : "Submenu emas"}</td>
                            <td>{item.parentMenuName}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>



            <Modal isOpen={props.open} toggle={() => props.updateState({open: false})}>
                <AvForm onSubmit={props.saveMenu}>
                    <ModalBody>

                        <AvField name="nameUz" type="text" onChange={(e) => props.updateState({url: generateUrl(e.target.value)})} label="Name (uz)" required/>
                        <AvField name="nameRu" type="text" label="Name (ru)" required/>
                        <AvField name="nameEn" type="text" label="Name (en)" required/>

                        <AvField name="url" type="text" label="Url" value={props.url}/>

                        <AvField name="submenu" onChange={() => props.updateState({submenu: !props.submenu})} type="checkbox" label="Is Submenu: "/>

                        {props.submenu ?
                            <AvField name="parentMenu" type="select" label="Parent Menu">
                                <option value="1">1</option>
                                <option value="1">2</option>
                            </AvField> : ""
                        }
                    </ModalBody>
                    <ModalFooter>
                        <button type="submit" className="btn btn-success">Save</button>
                        <button type="button" className="btn btn-secondary" onClick={() => props.updateState({open: false})}>Cancel</button>
                    </ModalFooter>
                </AvForm>
            </Modal>
        </AdminLayout>

    );
};

const mapStateToProps = (state) => {
    return {
        open: state.menus.open,
        url: state.menus.url,
        submenu: state.menus.submenu,
        menus: state.menus.menus
    }
};

export default connect(mapStateToProps, {updateState, saveMenu, getMenus})(AdminMenus);