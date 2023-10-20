import { useState } from 'react'
import Link from 'next/link'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

import styles from './index.module.css'

const createData = (id, name, phone, cccd, debt, debt_group, overdue_days) => {
  return { id, name, phone, cccd, debt, debt_group, overdue_days }
}

function GetStaffs() {
  const rows = [
    createData('NV001', 'Le Van Bang 1', '0368514722', '066202011554', '10.000.000.000đ', 4, 100),
    createData('NV002', 'Le Van Bang 2', '0368514722', '066202011554', '10.000.000.000đ', 4, 100),
    createData('NV003', 'Le Van Bang 3', '0368514722', '066202011554', '10.000.000.000đ', 4, 100),
    createData('NV004', 'Le Van Bang 4', '0368514722', '066202011554', '10.000.000.000đ', 4, 100),
    createData('Canada', 'CA', 37602103, 9984670, 'IN', 1324171354, 100),
    createData('Australia', 'AU', 25475400, 7692024, 'IN', 1324171354, 100),
    createData('Germany', 'DE', 83019200, 357578, 'IN', 1324171354, 100),
    createData('Ireland', 'IE', 4857000, 70273, 'IN', 1324171354, 100),
    createData('Mexico', 'MX', 126577691, 1972550, 'IN', 1324171354, 100),
    createData('Japan', 'JP', 126317000, 377973, 'IN', 1324171354, 100),
    createData('France', 'FR', 67022000, 640679, 'IN', 1324171354, 100),
    createData('United Kingdom', 'GB', 67545757, 242495, 'IN', 1324171354, 100),
    createData('Russia', 'RU', 146793744, 17098246, 'IN', 1324171354, 100),
    createData('Nigeria', 'NG', 200962417, 923768, 'IN', 1324171354, 100),
    createData('Brazil', 'BR', 210147125, 8515767, 'IN', 1324171354, 100)
  ]

  const columns = [
    { id: 'id', label: 'Mã khách hàng', minWidth: 120 },
    { id: 'name', label: 'Họ tên', minWidth: 200 },
    {
      id: 'phone',
      label: 'Số điện thoại',
      minWidth: 120
    },
    {
      id: 'cccd',
      label: 'Căn cước công dân',
      minWidth: 170
    },
    {
      id: 'debt',
      label: 'Tổng nợ hiện tại',
      minWidth: 170
    },
    {
      id: 'debt_group',
      label: 'Nhóm nợ',
      minWidth: 170
    },
    {
      id: 'overdue_days',
      label: 'Số ngày quá hạn',
      minWidth: 170
    }
  ]

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

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

                    return column.id !== 'id' ? (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    ) : (
                      <TableCell key={column.id} align={column.align}>
                        <Link href='/'>
                          <a className={styles.linkStyle}>{value}</a>
                        </Link>
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
        rowsPerPageOptions={[10, 15, 20]}
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

const NhanVien = () => {
  return (
    <Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Danh sách khách hàng nợ xấu' titleTypographyProps={{ variant: 'h6' }} />
          {GetStaffs()}
        </Card>
      </Grid>
    </Grid>
  )
}

export default NhanVien
