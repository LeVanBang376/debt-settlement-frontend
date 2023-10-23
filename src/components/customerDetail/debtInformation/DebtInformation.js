import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import styles from './DebtInformation.module.css'

const DebtInformation = () => {
  const fields = [
    {
      fieldText: 'Đơn vị chịu nợ',
      fieldName: 'don_vi_chiu_no'
    },
    {
      fieldText: 'Đơn vị quản lý hồ sơ',
      fieldName: 'don_vi_ql_hs'
    },
    {
      fieldText: 'Số thẻ',
      fieldName: 'so_the'
    },
    {
      fieldText: 'Số tài khoản',
      fieldName: 'so_tk'
    },
    {
      fieldText: 'Ngày mở thẻ',
      fieldName: 'ngay_mo_the'
    },
    {
      fieldText: 'Ngày chuyển nhóm 3',
      fieldName: 'ngay_chuyen_nhom_3'
    },
    {
      fieldText: 'Số ngày quá hạn',
      fieldName: 'so_ngay_qua_han'
    },
    {
      fieldText: 'Nhóm nợ',
      fieldName: 'nhom_no'
    },
    {
      fieldText: 'Nợ gốc nhận ủy thác',
      fieldName: 'no_goc_uy_thac'
    },
    {
      fieldText: 'Nợ lãi nhận ủy thác',
      fieldName: 'no_lai_uy_thac'
    },
    {
      fieldText: 'Tổng dư nợ ủy thác',
      fieldName: 'tong_du_no_uy_thac'
    },
    {
      fieldText: 'Nợ gốc hiện tại',
      fieldName: 'no_goc_ht'
    },
    {
      fieldText: 'Nợ lãi hiện tại',
      fieldName: 'no_lai_ht'
    },
    {
      fieldText: 'Tổng dư nợ hiện tại',
      fieldName: 'tong_du_no_ht'
    },
    {
      fieldText: 'Số tiền đã thanh toán',
      fieldName: 'so_tien_da_tt'
    },
    {
      fieldText: 'Lãi suất trong hạn áp dụng',
      fieldName: 'lai_suat_trong_han'
    },
    {
      fieldText: 'Lãi suất quá hạn áp dụng',
      fieldName: 'lai_suat_qua_han'
    },
    {
      fieldText: 'Hạn mức',
      fieldName: 'han_muc'
    },
    {
      fieldText: 'Tên chính sách cấp thẻ',
      fieldName: 'ten_chinh_sach'
    },
    {
      fieldText: 'Tiến độ CN/PGD',
      fieldName: 'tien_do'
    },
    {
      fieldText: 'Ghi chú',
      fieldName: 'ghi_chu'
    }
  ]

  const info = {
    don_vi_chiu_no: 'Chi nhánh Lý Thường Kiệt, Quận 10',
    don_vi_ql_hs: 'Chi nhánh Lý Thường Kiệt, Quận 10',
    so_the: '15616161616156',
    so_tk: '0004100034723472',
    ngay_mo_the: '15/10/2020',
    ngay_chuyen_nhom_3: '15/10/2021',
    so_ngay_qua_han: '190',
    nhom_no: '4',
    no_goc_uy_thac: '100.000.000',
    no_lai_uy_thac: '8.000.000',
    tong_du_no_uy_thac: '108.000.000',
    no_goc_ht: '100.000.000',
    no_lai_ht: '16.000.000',
    tong_du_no_ht: '116.000.000',
    so_tien_da_tt: '0',
    lai_suat_trong_han: '6%/năm',
    lai_suat_qua_han: '5%/năm',
    han_muc: '120.000.000',
    ten_chinh_sach: 'CSVN1',
    tien_do: 'Chưa khởi kiện',
    ghi_chu: 'Khi đạt 120.000.000 mà không thể liên lạc thì sẽ khởi kiện'
  }

  return (
    <Card>
      <Box className={styles.cardContent}>
        <Typography className={styles.cardHeader}>Thông tin dư nợ</Typography>
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

export default DebtInformation
