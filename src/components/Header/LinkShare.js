import React, {Fragment} from 'react';

function LinkShare(props) {
	return(
		<Fragment>
            <div className="mb-0">
                <a href={props.report} className="font-weight-bold">Permanent link to this check report</a>
                <span className="mx-1">| Share report</span>
                <a title="Share on twitter" className="font-weight-bold" href={props.twitter}>on Twitter</a>
            </div>
		</Fragment>
	);
}

export default LinkShare