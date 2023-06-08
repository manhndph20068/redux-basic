import Container from "react-bootstrap/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser, deleteUserRedux } from "../action/actions";

const TableUser = () => {
  // const [listUser, setListUser] = useState([]);
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.user.listUsers);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);
  const isDeleting = useSelector((state) => state.user.isDeleting);

  const handleDeleteUser = (user) => {
    dispatch(deleteUserRedux(user.id));
  };

  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);
  return (
    <>
      <Container>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>UserName</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isError === true ? (
              <tr>
                <td colSpan="4">Something wrong, please try again</td>
              </tr>
            ) : (
              <>
                {isLoading === true ? (
                  <tr>
                    <td colSpan="4">Loading data</td>
                  </tr>
                ) : (
                  <>
                    {listUser &&
                      listUser.length > 0 &&
                      listUser.map((item, index) => {
                        return (
                          <tr key={`${index}+user`}>
                            <td>{index + 1}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>
                              <button className="btn btn-warning">Edit</button>
                              <button
                                className="btn btn-danger mx-3"
                                disabled={isDeleting}
                                onClick={() => handleDeleteUser(item)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </>
                )}
              </>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableUser;
