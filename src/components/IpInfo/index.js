import React, {Fragment} from 'react';
import Title from '../Header/Title';

function Content(){
    return(
        <Fragment> 
	        <section>
			    <div className="container mt-3">
			        <div className="border rounded">
			            <Title title="IP and website location: <span class='text-main'>hoangphiit.com</span>"/>
			            <div className="p-2 py-3">
			                <div className="max-width-650 mx-auto">
			                    <a href="#" className="mb-1 d-block font-weight-bold">DB-IP (07.07.2020)</a>
			                    <div className="row">
			                        <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
			                            <div className="table-responsive">
			                                <table className="table table-bordered table-striped table-hover m-0">
			                                    <tbody>
			                                        <tr>
			                                            <td className="w-30 align-middle py-1">IP address</td>
			                                            <td className="w-70 align-middle py-1"><strong>104.27.143.107</strong></td>
			                                        </tr>
			                                        <tr>
			                                            <td className="w-30 align-middle py-1">Host name</td>
			                                            <td className="w-70 align-middle py-1">104.27.143.107</td>
			                                        </tr>
			                                        <tr>
			                                            <td className="w-30 align-middle py-1">IP range</td>
			                                            <td className="w-70 align-middle py-1">
			                                                104.27.135.0-104.27.147.255
			                                                <a title="CIDR of IP range" href="/subnet-calculator?host=104.27.135.0-104.27.147.255">
			                                                CIDR
			                                                </a>
			                                            </td>
			                                        </tr>
			                                        <tr>
			                                            <td className="w-30 align-middle py-1">ISP</td>
			                                            <td className="w-70 align-middle py-1">Cloudflare, Inc.</td>
			                                        </tr>
			                                        <tr>
			                                            <td className="w-30 align-middle py-1">Organization</td>
			                                            <td className="w-70 align-middle py-1">Cloudflare, Inc.</td>
			                                        </tr>
			                                        <tr>
			                                            <td className="w-30 align-middle py-1">Country</td>
			                                            <td className="w-70 align-middle py-1">
			                                                <img className="flag" src="assets/images/uk-flag.png" width={20} />
			                                                <strong>United States of America</strong>
			                                                (US)
			                                            </td>
			                                        </tr>
			                                        <tr>
			                                            <td className="w-30 align-middle py-1">Region</td>
			                                            <td className="w-70 align-middle py-1"> Virginia</td>
			                                        </tr>
			                                        <tr>
			                                            <td className="w-30 align-middle py-1">City</td>
			                                            <td className="w-30 align-middle py-1"> Ashburn</td>
			                                        </tr>
			                                        <tr>
			                                            <td className="w-30 align-middle py-1">Time zone</td>
			                                            <td className="w-70 align-middle py-1">
			                                                America/New_York, GMT-0400
			                                            </td>
			                                        </tr>
			                                        <tr>
			                                            <td className="w-30 align-middle py-1">Local time</td>
			                                            <td className="w-70 align-middle py-1"> 10:02:01 (EDT) / 2020.07.08</td>
			                                        </tr>
			                                        <tr>
			                                            <td className="w-30 align-middle py-1">Postal Code</td>
			                                            <td className="w-70 align-middle py-1"> 20149</td>
			                                        </tr>
			                                    </tbody>
			                                </table>
			                            </div>
			                            <div className="mt-1 text-right">
			                                Powered by <a target="_blank" rel="nofollow" href="https://db-ip.com">DB-IP</a>
			                            </div>
			                        </div>
			                        <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
			                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30672.01260289597!2d108.21603485210161!3d16.065408046185574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1594217879247!5m2!1svi!2s" width="100%" height={350} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
			                        </div>
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