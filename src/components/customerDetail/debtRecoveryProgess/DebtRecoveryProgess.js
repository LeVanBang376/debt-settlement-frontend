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

const createData = (ma_hanh_dong, loai_hanh_dong, ket_qua_hanh_dong, ghi_chu, nv_th, ngay_th) => {
  return { ma_hanh_dong, loai_hanh_dong, ket_qua_hanh_dong, ghi_chu, nv_th, ngay_th }
}

function GetTable() {
  const rows = [
    createData(
      'LHKH001001',
      'Gọi điện khách hàng',
      'Không phản hồi',
      '2h đêm gọi không bắt máy',
      'Lê Nhân Viên',
      '23/10/2023'
    ),
    createData(
      'LHKH001001',
      'Gọi điện khách hàng',
      'Không phản hồi',
      '2h đêm gọi không bắt máy',
      'Lê Nhân Viên',
      '23/10/2023'
    ),
    createData(
      'LHKH001001',
      'Gọi điện khách hàng',
      'Không phản hồi',
      '2h đêm gọi không bắt máy',
      'Lê Nhân Viên',
      '23/10/2023'
    ),
    createData(
      'LHKH001001',
      'Gọi điện khách hàng',
      'Không phản hồi',
      '2h đêm gọi không bắt máy',
      'Lê Nhân Viên',
      '23/10/2023'
    ),
    createData(
      'LHKH001001',
      'Gọi điện khách hàng',
      'Không phản hồi',
      '2h đêm gọi không bắt máy',
      'Lê Nhân Viên',
      '23/10/2023'
    ),
    createData(
      'LHKH001001',
      'Gọi điện khách hàng',
      'Không phản hồi',
      '2h đêm gọi không bắt máy',
      'Lê Nhân Viên',
      '23/10/2023'
    ),
    createData(
      'LHKH001001',
      'Gọi điện khách hàng',
      'Không phản hồi',
      '2h đêm gọi không bắt máy',
      'Lê Nhân Viên',
      '23/10/2023'
    ),
    createData(
      'LHKH001001',
      'Gọi điện khách hàng',
      'Không phản hồi',
      '2h đêm gọi không bắt máy',
      'Lê Nhân Viên',
      '23/10/2023'
    ),
    createData(
      'LHKH001001',
      'Gọi điện khách hàng',
      'Không phản hồi',
      '2h đêm gọi không bắt máy',
      'Lê Nhân Viên',
      '23/10/2023'
    )
  ]

  const columns = [
    {
      id: 'action',
      label: '',
      minWidth: 150
    },
    { id: 'ma_hanh_dong', label: 'Mã hành động', minWidth: 150 },
    { id: 'loai_hanh_dong', label: 'Loại hành động', minWidth: 200 },
    {
      id: 'ket_qua_hanh_dong',
      label: 'Kết quả hành động',
      minWidth: 200
    },
    {
      id: 'ghi_chu',
      label: 'Ghi chú',
      minWidth: 300
    },
    {
      id: 'nv_th',
      label: 'Nhân viên thực hiện',
      minWidth: 200
    },
    {
      id: 'ngay_th',
      label: 'Ngày thực hiện',
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

const DebtRecoveryProgess = props => {
  return (
    <Card sx={{ marginTop: '1rem' }}>
      <Typography sx={{ fontSize: '22px', fontWeight: 'bold', margin: '20px 0 12px 20px' }}>
        Tiến độ thu hồi nợ
      </Typography>
      <Box>{GetTable()}</Box>
    </Card>
  )
}

export default DebtRecoveryProgess
