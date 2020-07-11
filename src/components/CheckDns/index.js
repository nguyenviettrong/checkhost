import React, {Fragment} from 'react';
import Title from '../Header/Title';
import LinkShare from '../Header/LinkShare';
import ukFlag from '../../assets/images/uk-flag.png';

function Content(){
    return(
        <Fragment> 
            <section>
			    <div className="container mt-3">
			        <div className="border rounded">
			            <Title title="DNS <span class='text-main'>hoangphiit.com</span>"/>
			            <div className="p-2 py-3">
			                <div className="max-width-650 mx-auto">
			                    <LinkShare report="#" twitter="#" />
			                    <div className="table-responsive">
			                        <table className="table table-bordered table-hover m-0">
			                            <tbody>
			                                <tr className="bg-white">
			                                    <th className="py-1 align-middle border-white">Location</th>
			                                    <th className="py-1 align-middle border-white">Result</th>
			                                    <th className="py-1 align-middle border-white">TTL</th>
			                                </tr>
			                                <tr className="bg-f3f3f3">
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        <img src={ukFlag} alt="UK" width={20} className="mr-1"/>
			                                        <span className="border-bottom border-dashed border-dark  border-left-0 border-right-0 border-top-0" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Finland, Helsinki</span>
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal max-width-200">
			                                        104.27.142.107, 172.67.199.240, 104.27.143.107, 2606:4700:3036::ac43:c7f0, 2606:4700:3035::681b:8f6b, 2606:4700:3036::681b:8e6b
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        2m 4s
			                                    </th>
			                                </tr>
			                                <tr className="bg-f3f3f3">
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        <img src={ukFlag} alt="UK" width={20} className="mr-1"/>
			                                        <span className="border-bottom border-dashed border-dark  border-left-0 border-right-0 border-top-0" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Finland, Helsinki</span>
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal max-width-200">
			                                        104.27.142.107, 172.67.199.240, 104.27.143.107, 2606:4700:3036::ac43:c7f0, 2606:4700:3035::681b:8f6b, 2606:4700:3036::681b:8e6b
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        2m 4s
			                                    </th>
			                                </tr>
			                                <tr className="bg-f3f3f3">
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        <img src={ukFlag} alt="UK" width={20} className="mr-1"/>
			                                        <span className="border-bottom border-dashed border-dark  border-left-0 border-right-0 border-top-0" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Finland, Helsinki</span>
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal max-width-200">
			                                        104.27.142.107, 172.67.199.240, 104.27.143.107, 2606:4700:3036::ac43:c7f0, 2606:4700:3035::681b:8f6b, 2606:4700:3036::681b:8e6b
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        2m 4s
			                                    </th>
			                                </tr>
			                                <tr className="bg-f3f3f3">
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        <img src={ukFlag} alt="UK" width={20} className="mr-1"/>
			                                        <span className="border-bottom border-dashed border-dark  border-left-0 border-right-0 border-top-0" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Finland, Helsinki</span>
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal max-width-200 text-danger">
			                                        Unknown host
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        2m 4s
			                                    </th>
			                                </tr>
			                                <tr className="bg-f3f3f3">
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        <img src={ukFlag} alt="UK" width={20} className="mr-1"/>
			                                        <span className="border-bottom border-dashed border-dark  border-left-0 border-right-0 border-top-0" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Finland, Helsinki</span>
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal max-width-200">
			                                        104.27.142.107, 172.67.199.240, 104.27.143.107, 2606:4700:3036::ac43:c7f0, 2606:4700:3035::681b:8f6b, 2606:4700:3036::681b:8e6b
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        2m 4s
			                                    </th>
			                                </tr>
			                                <tr className="bg-white">
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        <img src={ukFlag} alt="UK" width={20} className="mr-1"/>
			                                        <span className="border-bottom border-dashed border-dark  border-left-0 border-right-0 border-top-0" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Finland, Helsinki</span>
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal max-width-200">
			                                        104.27.142.107, 172.67.199.240, 104.27.143.107, 2606:4700:3036::ac43:c7f0, 2606:4700:3035::681b:8f6b, 2606:4700:3036::681b:8e6b
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        2m 4s
			                                    </th>
			                                </tr>
			                                <tr className="bg-white">
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        <img src={ukFlag} alt="UK" width={20} className="mr-1"/>
			                                        <span className="border-bottom border-dashed border-dark  border-left-0 border-right-0 border-top-0" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Finland, Helsinki</span>
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal max-width-200">
			                                        104.27.142.107, 172.67.199.240, 104.27.143.107, 2606:4700:3036::ac43:c7f0, 2606:4700:3035::681b:8f6b, 2606:4700:3036::681b:8e6b
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        2m 4s
			                                    </th>
			                                </tr>
			                                <tr className="bg-white">
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        <img src={ukFlag} alt="UK" width={20} className="mr-1"/>
			                                        <span className="border-bottom border-dashed border-dark  border-left-0 border-right-0 border-top-0" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Finland, Helsinki</span>
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal max-width-200">
			                                        104.27.142.107, 172.67.199.240, 104.27.143.107, 2606:4700:3036::ac43:c7f0, 2606:4700:3035::681b:8f6b, 2606:4700:3036::681b:8e6b
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        2m 4s
			                                    </th>
			                                </tr>
			                                <tr className="bg-white">
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        <img src={ukFlag} alt="UK" width={20} className="mr-1"/>
			                                        <span className="border-bottom border-dashed border-dark  border-left-0 border-right-0 border-top-0" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Finland, Helsinki</span>
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal max-width-200">
			                                        104.27.142.107, 172.67.199.240, 104.27.143.107, 2606:4700:3036::ac43:c7f0, 2606:4700:3035::681b:8f6b, 2606:4700:3036::681b:8e6b
			                                    </th>
			                                    <th className="py-1 align-middle font-weight-normal">
			                                        2m 4s
			                                    </th>
			                                </tr>
			                            </tbody>
			                        </table>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</section>
        </Fragment>
    );
}

export default Content