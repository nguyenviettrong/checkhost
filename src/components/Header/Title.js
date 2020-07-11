import React, {Fragment} from 'react';
import ukFlag from '../../assets/images/uk-flag.png';
import ruFlag from '../../assets/images/russia-flag.jpg';

function Title(props) {
	return(
		<Fragment>
            <div className="bg-f3f3f3 px-2 py-1 text-center d-flex align-items-center">
                <span className="font-size-15 text-center flex-grow-1 font-weight-bold"
                dangerouslySetInnerHTML={{__html: props.title}} />
                <div className="d-flex align-items-center justify-content-center">
                    <img src={ukFlag} alt="UK" width={25} className="mr-2" />
                    <img src={ruFlag} alt="Russia" width={25} />
                </div>
            </div>
		</Fragment>
	);
}

export default Title