import { useState } from 'react'

import {
  Card,
  Box,
  Paper,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  Typography,
  Button
} from '@mui/material'

const createData = (ma_kh, ten_kh, cccd, nguoi_dc_uy_quyen, so_tien_kk, tt_kk, tt_tha, an_phi, tinh_tp, quan_huyen) => {
  return { ma_kh, ten_kh, cccd, nguoi_dc_uy_quyen, so_tien_kk, tt_kk, tt_tha, an_phi, tinh_tp, quan_huyen }
}

function GetTable() {
  const rows = [
    createData(
      '0004100034721212',
      'Khách hàng nợ xấu',
      '066202011111',
      'Lê Nhân Viên 2',
      '500.000',
      'Đã khởi kiện',
      'Đang chờ đến ngày xét xử',
      '200.000',
      'Hồ chí Minh',
      'Thủ đức'
    ),
    createData(
      '0004100034721212',
      'Khách hàng nợ xấu',
      '066202011111',
      'Lê Nhân Viên 2',
      '500.000',
      'Đã khởi kiện',
      'Đang chờ đến ngày xét xử',
      '200.000',
      'Hồ chí Minh',
      'Thủ đức'
    ),
    createData(
      '0004100034721212',
      'Khách hàng nợ xấu',
      '066202011111',
      'Lê Nhân Viên 2',
      '500.000',
      'Đã khởi kiện',
      'Đang chờ đến ngày xét xử',
      '200.000',
      'Hồ chí Minh',
      'Thủ đức'
    ),
    createData(
      '0004100034721212',
      'Khách hàng nợ xấu',
      '066202011111',
      'Lê Nhân Viên 2',
      '500.000',
      'Đã khởi kiện',
      'Đang chờ đến ngày xét xử',
      '200.000',
      'Hồ chí Minh',
      'Thủ đức'
    ),
    createData(
      '0004100034721212',
      'Khách hàng nợ xấu',
      '066202011111',
      'Lê Nhân Viên 2',
      '500.000',
      'Đã khởi kiện',
      'Đang chờ đến ngày xét xử',
      '200.000',
      'Hồ chí Minh',
      'Thủ đức'
    ),
    createData(
      '0004100034721212',
      'Khách hàng nợ xấu',
      '066202011111',
      'Lê Nhân Viên 2',
      '500.000',
      'Đã khởi kiện',
      'Đang chờ đến ngày xét xử',
      '200.000',
      'Hồ chí Minh',
      'Thủ đức'
    ),
    createData(
      '0004100034721212',
      'Khách hàng nợ xấu',
      '066202011111',
      'Lê Nhân Viên 2',
      '500.000',
      'Đã khởi kiện',
      'Đang chờ đến ngày xét xử',
      '200.000',
      'Hồ chí Minh',
      'Thủ đức'
    ),
    createData(
      '0004100034721212',
      'Khách hàng nợ xấu',
      '066202011111',
      'Lê Nhân Viên 2',
      '500.000',
      'Đã khởi kiện',
      'Đang chờ đến ngày xét xử',
      '200.000',
      'Hồ chí Minh',
      'Thủ đức'
    ),
    createData(
      '0004100034721212',
      'Khách hàng nợ xấu',
      '066202011111',
      'Lê Nhân Viên 2',
      '500.000',
      'Đã khởi kiện',
      'Đang chờ đến ngày xét xử',
      '200.000',
      'Hồ chí Minh',
      'Thủ đức'
    )
  ]

  const columns = [
    {
      id: 'action',
      label: '',
      minWidth: 150
    },
    { id: 'ma_kh', label: 'Mã khách hàng', minWidth: 150 },
    { id: 'ten_kh', label: 'Tên khách hàng', minWidth: 200 },
    {
      id: 'cccd',
      label: 'Căn cước công dân',
      minWidth: 170
    },
    {
      id: 'nguoi_dc_uy_quyen',
      label: 'Người được ủy quyền',
      minWidth: 200
    },
    {
      id: 'so_tien_kk',
      label: 'Số tiền khởi kiện',
      minWidth: 150
    },
    {
      id: 'tt_kk',
      label: 'Trạng thái khởi kiện',
      minWidth: 200
    },
    {
      id: 'tt_tha',
      label: 'Trạng thái thi hành án',
      minWidth: 250
    },
    {
      id: 'an_phi',
      label: 'Án phí',
      minWidth: 120
    },
    {
      id: 'tinh_tp',
      label: 'Tỉnh/Thành phố',
      minWidth: 150
    },
    {
      id: 'quan_huyen',
      label: 'Quận/huyện',
      minWidth: 150
    }
  ]

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return column.id === 'action' ? (
                      <TableCell key={column.id} align={column.align}>
                        <Button variant='outlined'>Chi tiết</Button>
                      </TableCell>
                    ) : (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

const LawsuitProgressAndExecution = props => {
  return (
    <Card sx={{ marginTop: '1rem' }}>
      <Typography sx={{ fontSize: '22px', fontWeight: 'bold', margin: '20px 0 12px 20px' }}>
        Tiến độ kiện và thi hành án
      </Typography>
      <Box>{GetTable()}</Box>
    </Card>
  )
}

export default LawsuitProgressAndExecution
