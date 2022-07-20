import React from 'react';
import './VerifyEmail.css';
import { GlobalCtx } from '../../App';
import { Navigate, useParams } from 'react-router-dom';
import { verifyEmail } from '../../services/Auth';
import zdięcie from './23.png'

const VerifyEmail = () => {
    const { user } = React.useContext(GlobalCtx);
    const { code } = useParams();

    const handleClick = () => {
        verifyEmail(code);
    }

  return (
    <div className='VerifyEmail'>
        {user.loggedIn && <Navigate to='/' replace />}
        <table>
          <tr>
            <td className='sa'>
              <table>
                <tr>
                  <td className='df'></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td className='sa as'>
              <table className='gb'>
                <tr>
                  <td className='bbg'>
                    <h1>Witamy!</h1>
                    <img src={zdięcie} />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td className='as sd'>
              <table className='gv'>
                <tr className='yt'>
                  <td>
                    <p>Cieszymy się, że możesz zacząć. Najpierw musisz potwierdzić swoje konto. Wystarczy nacisnąć przycisk poniżej.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table>
                      <tr>
                        <td className='fg'>
                          <table>
                            <tr>
                              <td> <button onClick={handleClick} className='bu'>Weryfikuj</button></td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

    </div>
  )
}

export default VerifyEmail;