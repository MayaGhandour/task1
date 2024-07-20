import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

function createData(id, name) {
  return {
    id,
    name,
  };
}

const rows = [
  createData(1, "Super Admin"),
  createData(2, "Employee"),
  createData(3, "Admin"),
  createData(4, "Admin"),
];

const headCells = [
  {
    id: "permission",
    text: true,
    label: "Module Permission",
  },
  {
    id: "read",
    text: false,
    label: "Read",
  },
  {
    id: "write",
    text: false,
    label: "Write",
  },
  {
    id: "delet",
    text: false,
    label: "Delete",
  },
];

function EnhancedTableHead(props) {
  return (
    <TableHead sx={{ backgroundColor: "#EFF4FA" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.text ? "left" : "center"}
            sx={{ backgroundColor: "#EFF4FA", paddingX: "50px" }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [selected, setSelected] = React.useState([]);

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const visibleRows = rows;
  const [checkboxState, setCheckboxState] = React.useState(
    rows.reduce((acc, row) => {
      acc[row.id] = { read: false, write: false, delete: false };
      return acc;
    }, {})
  );
  const handleCheckboxChange = (id, type) => (event) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], [type]: event.target.checked },
    }));
  };
  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setShowModal(!showModal);
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EnhancedTableHead />
              <TableBody>
                {visibleRows.map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="15px"
                        align="left"
                      >
                        <Typography
                          sx={{
                            paddingLeft: "35px",
                            fontWeight: "400",
                            fontSize: "12px",
                          }}
                        >
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell padding="checkbox" align="center">
                        <Checkbox
                          color="primary"
                          checked={checkboxState[row.id]?.read || false}
                          onChange={handleCheckboxChange(row.id, "read")}
                          sx={{
                            color: "#231F20",
                            "&.Mui-checked": {
                              color: "#231F20",
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell padding="checkbox" align="center">
                        <Checkbox
                          color="primary"
                          checked={checkboxState[row.id]?.write || false}
                          onChange={handleCheckboxChange(row.id, "write")}
                          sx={{
                            color: "#231F20",
                            "&.Mui-checked": {
                              color: "#231F20",
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell padding="checkbox" align="center">
                        <Checkbox
                          checked={checkboxState[row.id]?.delete || false}
                          onChange={handleCheckboxChange(row.id, "delete")}
                          sx={{
                            color: "#231F20",
                            "&.Mui-checked": {
                              color: "#231F20",
                            },
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
}
