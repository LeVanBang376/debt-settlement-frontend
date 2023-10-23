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
  Typography
} from '@mui/material'

const createData = (tien_do, ghi_chu, ngay_cap_nhat, nv_cap_nhat) => {
  return { tien_do, ghi_chu, ngay_cap_nhat, nv_cap_nhat }
}

function GetTable() {
  const rows = [
    createData('Đã khởi kiện', 'N/A', '23/10/2023', 'Lê Nhân Viên'),
    createData(
      'Chưa khởi kiện',
      'Khách hàng không rep, đã gửi đơn khởi kiện, chờ quản lý duyệt',
      '23/10/2023',
      'Lê Nhân Viên'
    ),
    createData('Chưa khởi kiện', 'Đã đạt 120.000.000, đang liên hệ khách hàng', '22/10/2023', 'Lê Nhân Viên'),
    createData('Chưa khởi kiện', 'Chưa đạt 120.000.000', '21/10/2023', 'Lê Nhân Viên'),
    createData('Chưa khởi kiện', 'Chưa đạt 120.000.000', '21/10/2023', 'Lê Nhân Viên'),
    createData('Chưa khởi kiện', 'Chưa đạt 120.000.000', '20/10/2023', 'Lê Nhân Viên'),
    createData('Chưa khởi kiện', 'Chưa đạt 120.000.000', '20/10/2023', 'Lê Nhân Viên'),
    createData('Chưa khởi kiện', 'Chưa đạt 120.000.000', '20/10/2023', 'Lê Nhân Viên'),
    createData('Chưa khởi kiện', 'Chưa đạt 120.000.000', '20/10/2023', 'Lê Nhân Viên')
  ]

  const columns = [
    { id: 'tien_do', label: 'Tiến độ CN/PGD', minWidth: 120 },
    { id: 'ghi_chu', label: 'Ghi chú', minWidth: 200 },
    {
      id: 'ngay_cap_nhat',
      label: 'Ngày cập nhật',
      minWidth: 120
    },
    {
      id: 'nv_cap_nhat',
      label: 'Nhân viên cập nhật',
      minWidth: 170
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

                    return (
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

const CNPGDProgress = props => {
  return (
    <Card sx={{ marginTop: '1rem' }}>
      <Typography sx={{ fontSize: '22px', fontWeight: 'bold', margin: '20px 0 12px 20px' }}>Tiến độ CN/PGD</Typography>
      <Box>{GetTable()}</Box>
    </Card>
  )
}

export default CNPGDProgress
