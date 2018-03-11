import palette from './palette';

const {
    white,
    textHeader,
    text,
    textHighlight
  } = palette,

  // shapeTop = 'polygon(75% 0, 100% 19%, 100% 84%, 1% 99%)';
  // shapeBottom = 'polygon(75% 0, 100% 48%, 50% 99%, 0 52%, 0 13%)';
  dShapeBottom = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0 52%, 50% 99%, 100% 48%, 75% 0, 0 13%)',
  dShapeTop = 'polygon(0% 0%, 100% 0%, 100% 19%, 75% 0%, 0% 100%, 100% 82%, 100% 100%, 0% 100%)',
  mShapeBottom = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0 40%, 50% 99%, 100% 60%, 100% 15%, 90% 0, 0 13%)',
  mShapeTop = 'polygon(0% 0%, 100% 0%, 100% 10%, 65% 0%, 0% 65%, 0% 100% , 100% 90%, 100% 100%, 0% 100%)';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    position: 'relative',
    minWidth: '100%',
    '& .infoRow': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      position: 'relative',
      minWidth: '100%',
      maxHeight: 535,
      overflow: 'hidden',

      '& .textBlockLeft': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: white,
        padding: '0 2% 0% 7%'
      },
      '& .imgBlockTop': {
        position: 'relative',
        maxHeight: 535,
        display: 'flex',
        '& .textRiskFreeWrap': {
          position: 'absolute',
          top: '39%',
          left: '53%',
          display: 'flex',
          felxDirection: 'row',
          alignItems: 'center',
          opacity: 1
        },
        '& .textSecureWrap': {
          position: 'absolute',
          top: '54%',
          left: '77%',
          display: 'flex',
          felxDirection: 'row',
          alignItems: 'center',
          opacity: 1

        },
        '& .innerText': {
          margin: '0 0 0 10px',
          fontFamily: 'Khand',
          fontSize: 24,
          color: text

        },
        '& .topWindow': {
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: white,
          '-webkit-clip-path': dShapeTop,
          clipPath: dShapeTop
        }
      },
      '& .textBlockRight': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: white,
        width: '100%',
        padding: '0 2% 0 7%',
        textAlign: 'right'
      },
      '& .imgBlockBottom': {
        position: 'relative',
        maxHeight: 543,
        '& .bottomWindow': {
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: white,
          '-webkit-clip-path': dShapeBottom,
          clipPath: dShapeBottom
        }
      },
      '& .firstLine': {
        margin: '0 0 51px 0',
        fontFamily: 'Khand',
        fontSize: '48px',
        fontWeight: 'bold',

        color: textHeader
      },
      '& .txtBody': {
        fontFamily: 'Arsenal',
        fontSize: '20px',
        fontWeight: 'normal',
        color: text
      },
      '& .txtHighlight': {
        extend: 'txtBody',
        color: textHighlight,
        fontWeight: 'bold'
      },
      '& .traslucent80': { filter: 'opacity(80%)' }
    }
  },
  mRoot: {
    extend: 'root',
    '& .infoRow': {
      extend: 'infoRow',
      flexDirection: 'column',
      maxHeight: 1000,
      '& .textBlockLeft': {
        extend: 'textBlockLeft',
        borderTop: '50px solid white',
        borderBottom: '50px solid white',
        padding: '10%'
      },
      '& .textBlockRight': {
        extend: 'textBlockRight',
        borderTop: '20px solid white',
        borderBottom: '50px solid white',
        width: '91%',
        padding: '0 7% 0 2%'
      },
      '& .imgBlockTop': {
        extend: 'imgBlockTop',
        '& .topWindow': {
          extend: 'topWindow',
          '-webkit-clip-path': mShapeTop,
          clipPath: mShapeTop
        },
        '& .textRiskFreeWrap': {
          extend: 'textRiskFreeWrap',
          top: '25%',
          left: '60%'
        },
        '& .textSecureWrap': {
          extend: 'textSecureWrap',
          top: '54%',
          left: '43%'
        }
      },
      '& .imgBlockBottom': {
        extend: 'imgBlockBottom',
        maxHeight: 450,
        '& .bottomWindow': {
          extend: 'bottomWindow',
          '-webkit-clip-path': mShapeBottom,
          clipPath: mShapeBottom
        }
      },
      '& .firstLine': {
        extend: 'firstLine',
        fontSize: '38px'
      }
    }
  }
};
