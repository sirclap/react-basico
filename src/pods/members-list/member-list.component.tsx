import React from "react";
import { MemberVm } from "./member-list.vm";
import { MemberListRow } from "./components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

interface Props {
  memberList: MemberVm[];
  page?: number;
  rowsPerPage?: number;
  rowsPerPageOptions?: number[];
  onEdit: (login: string) => void;
}

export const MemberListComponent: React.FC<Props> = (props) => {
  const { memberList, onEdit, rowsPerPageOptions } = props;

  const [page, setPage] = React.useState(props.page);
  const [rowsPerPage, setRowsPerPage] = React.useState(props.rowsPerPage);
  const [rowsCount, setRowsCount] = React.useState(0);
  const [startRow, setStartRow] = React.useState(0);
  const [endRow, setEndRow] = React.useState(0);

  React.useEffect(() => {
    setStartRow(page * rowsPerPage);
    setEndRow(page * rowsPerPage + rowsPerPage);
  }, [page, rowsPerPage]);

  React.useEffect(() => {
    setPage(0);
    setRowsCount(memberList.length);
  }, [memberList]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Login</TableCell>
              <TableCell>Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {memberList.slice(startRow, endRow).map((member) => (
              <MemberListRow
                key={member.id}
                member={member}
                onEdit={onEdit}
              ></MemberListRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={rowsCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

MemberListComponent.defaultProps = {
  page: 0,
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 25],
};
