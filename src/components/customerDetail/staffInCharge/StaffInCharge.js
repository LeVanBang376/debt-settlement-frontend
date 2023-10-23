import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import styles from './StaffInCharge.module.css'

const StaffInCharge = props => {
  const fields = [
    {
      fieldText: 'Mã nhân viên',
      fieldName: 'ma_nv'
    },
    {
      fieldText: 'Tên nhân viên',
      fieldName: 'ten_nv'
    },
    {
      fieldText: 'Đơn vị',
      fieldName: 'don_vi'
    }
  ]

  const info = {
    ma_nv: 'NV00001',
    ten_nv: 'Lê Nhân Viên',
    don_vi: 'Chi nhánh Lý Thường Kiệt, Quận 10, Thành phố Hồ Chí Minh'
  }

  return (
    <Card sx={{ marginBottom: '1rem' }}>
      <Box className={styles.cardContent}>
        <Typography className={styles.cardHeader}>Nhân viên phụ trách {props.index}</Typography>
        {fields.map((item, key) => (
          <Box
            sx={{
              display: 'flex'
            }}
            key={key}
          >
            <Box className={styles.fieldContainer}>
              <Typography className={styles.field}>{item.fieldText}:</Typography>
            </Box>
            <Box>
              <Typography className={styles.fieldValue}>{info[item.fieldName]}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  )
}

export default StaffInCharge
