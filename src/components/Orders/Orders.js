import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import { ordersList} from '../../data';
import './Orders.css'



const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Order ID',
  },
  {
    id: 'customerName',
    numeric: true,
    disablePadding: false,
    label: 'Customer Name',
  },
  {
    id: 'orderDate',
    numeric: true,
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
];


function EnhancedTableToolbar(props) {
  const { numSelected, deleteOrder } = props;

  const deleteIconClick = () => {
    deleteOrder()
  }

  return (
    <Toolbar
      sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
     
      <h2 className='dahboard-heading'>Orders</h2>
      {numSelected > 0 && (
      <Box sx={{ border:'2px solid red', borderRadius:'50px', marginTop:'10px'}}>
        <Tooltip title="Delete" >
          <IconButton >
            <DeleteIcon sx={{color:'red'}} onClick={deleteIconClick}/>
          </IconButton>
        </Tooltip>
      </Box>
      )}
    </Toolbar>
  );
}
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount } =
    props;

  return (
    <TableHead sx={{backgroundColor:'#000'}}>
      <TableRow>
        <TableCell padding="normal" sx={{display:'flex', alignItems:'center', borderBottom:'none'}}>
          <Checkbox
            sx={{color:'#fff'}}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'right'}
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{color:'white'}}
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
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};



export default function EnhancedTable() {
  const [listOfOrders, setListOfOrders] = React.useState(ordersList)
  const [selected, setSelected] = React.useState([]);


  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = listOfOrders.map((n) => n.id);
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
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const deleteOrder = () => {
    const finalOrders = listOfOrders.filter(order => !selected.includes(order.id))
    setListOfOrders(finalOrders)
    setSelected([])
  }

  return (
    <Box sx={{ width: '100%', display:'flex', justifyContent:'center' }}>
      <Paper sx={{ width: '90%', mb: 5, marginBottom:'40px'}}>
        <EnhancedTableToolbar numSelected={selected.length} deleteOrder={deleteOrder} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750}}
            aria-labelledby="tableTitle"
            size={ 'small'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={listOfOrders.length}
              
            />
            <TableBody sx={{backgroundColor:'#f9f5ea'}}>
              {listOfOrders.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="normal"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="normal" >
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">{row.orderId}</TableCell>
                    <TableCell align="right">{row.customerName}</TableCell>
                    <TableCell align="right">{row.orderDate}</TableCell>
                    <TableCell align="right">{row.status }</TableCell>
                  </TableRow>
                );
              })}
              
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}