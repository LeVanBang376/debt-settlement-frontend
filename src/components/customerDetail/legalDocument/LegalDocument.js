import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Input from '@mui/material/Input'

import styles from './LegalDocument.module.css'

const LegalDocument = props => {
  const fields = [
    {
      fieldText: 'Hồ sơ',
      fieldName: 'ho_so'
    },
    {
      fieldText: 'Nhân viên thực hiện',
      fieldName: 'nv_th'
    },
    {
      fieldText: 'Ngày thực hiện',
      fieldName: 'ngay_th'
    },
    {
      fieldText: 'Nhân viên xóa',
      fieldName: 'nv_xoa'
    },
    {
      fieldText: 'Ngày xóa',
      fieldName: 'ngay_xoa'
    }
  ]

  const info = {
    ho_so: '',
    nv_th: 'NV00001',
    ngay_th: '20/10/2023',
    nv_xoa: 'N/A',
    ngay_xoa: 'N/A'
  }

  return (
    <Card>
      <Box className={styles.cardContent}>
        <Typography className={styles.cardHeader}>Hồ sơ pháp lý</Typography>
        {/* <Input type='file' placeholder='Tải hồ sơ lên...' /> */}
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
              <Typography className={styles.fieldValue}>{info[item.fieldName] || 'N/A'}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  )
}

export default LegalDocument
