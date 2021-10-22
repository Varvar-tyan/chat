const styles = {
    dialogsListContainer: {
        maxHeight: '90vh',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '0.4em'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
          }
    },
    dialogItemContainer: {
        display: 'flex',
        width: '100%'
    },
    dialogItemInfoContainer: {
        width: '100%'
    },
    dialogItemInfo: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    messageWrapper: {
        maxWidth: '210px',
        overflow: 'hidden'
    },
    message: {
        color: 'text.secondary',
    }
}

export default styles;