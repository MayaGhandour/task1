import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

function createData(id, name, email, calories, fat, carbs, protein) {
  return {
    id,
    name,
    email,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData(
    1,
    "Cupcake",
    "cupcake@gmail.com",
    "Employee",
    "24 Otc, 2015",
    "Lorem Ipsum",
    4.3
  ),
  createData(
    2,
    "Donut",
    "donut@gmail.com",
    "HR Admin",
    "24 Otc, 2015",
    "Lorem Ipsum",
    4.9
  ),
  createData(
    3,
    "Eclair",
    "eclair@gmail.com",
    "Admin",
    "24 Otc, 2015",
    "Lorem Ipsums",
    6.0
  ),
  createData(
    4,
    "Frozen yoghurt",
    "frozenyoghurt@gmail.com",
    "Super Admin",
    "24 Otc, 2015",
    "Lorem Ipsum",
    4.0
  ),
  createData(
    5,
    "Gingerbread",
    "gingerbread@gmail.com",
    "Super Admin",
    "24 Otc, 2015",
    "Lorem Ipsum",
    3.9
  ),
  createData(
    6,
    "Honeycomb",
    "honeycomb@gmail.com",
    "Super Admin",
    "24 Otc, 2015",
    "Lorem Ipsum",
    6.5
  ),
  createData(
    7,
    "Ice cream sandwich",
    "icecreamsandwich@gmail.com",
    "Super Admin",
    "24 Otc, 2015",
    37,
    4.3
  ),
  createData(
    8,
    "Jelly Bean",
    "jellybean@gmail.com",
    "Super Admin",
    0.0,
    94,
    0.0
  ),
  createData(9, "KitKat", "kitkat@gmail.com", "Super Admin", 26.0, 65, 7.0),
  createData(10, "Lollipop", "lollipop@gmail.com", "Super Admin", 0.2, 98, 0.0),
  createData(
    11,
    "Marshmallow",
    "marshmallow@gmail.com",
    "Super Admin",
    0,
    81,
    2.0
  ),
  createData(12, "Nougat", "nougat@gmail.com", "Super Admin", 19.0, 9, 37.0),
  createData(13, "Oreo", "oreo@gmail.com", "Super Admin", 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Creat Data",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Role",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ backgroundColor: "#EFF4FA" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              backgroundColor: "#EFF4FA",
              paddingX: "2.2vw",
              fontWeight: "500",
              fontSize: "0.9rem",
              color: "#8F9BB3",
              lineHeight: "16px",
            }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{
            flex: "1 1 100%",
            color: "#222B45",
            fontSize: "1rem",
            fontWeight: "600",
          }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          list Users
        </Typography>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          sx={{ borderRadius: "2rem" }}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            // size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{ padding: "10px 40px" }}
                    >
                      <Typography
                        sx={{
                          color: "#222B45",
                          fontSize: "14px !important",
                          fontWeight: "600 !important",
                        }}
                      >
                        {row.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#8F9BB3",
                          fontSize: "12px !important",
                          fontWeight: "400 !important",
                        }}
                      >
                        {row.email}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          borderRadius: "10px",
                          fontWeight: "600 !important",
                          fontSize: "13px",
                          width: "120px",
                          padding: "5px",
                          backgroundColor:
                            row.calories === "Employee" ? "#EFF4FA" : "#0095FF",

                          color:
                            row.calories === "Employee" ? "#8F9BB3" : "#fff",
                        }}
                      >
                        {" "}
                        {row.calories}
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "12px",
                        fontWeight: "400",
                      }}
                    >
                      {row.fat}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "12px",
                        fontWeight: "400",
                      }}
                    >
                      {row.carbs}
                    </TableCell>
                    <TableCell align="center">
                      <div className="flex justify-center gap-3">
                        {" "}
                        <CiEdit color="#C5CEE0" />{" "}
                        <RiDeleteBinLine color="#C5CEE0" />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                // style={{
                //   height: (dense ? 33 : 53) * emptyRows,
                // }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Items per page:"
        />
      </Paper>
    </Box>
  );
}
