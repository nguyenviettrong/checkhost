import React, {Fragment} from 'react';
import Title from '../Header/Title';

function Content(){
    return(
        <Fragment> 
            <section>
			    <div className="container mt-3">
			        <div className="border rounded">
			            <Title title="About"/>
			            <div className="p-2 py-3">
			                <div className="max-width-650 mx-auto">
			                    <p><strong>Website monitoring with <a title="check domain, server monitoring" href="http://check-host.net">check-host.net</a></strong></p>
			                    <p>Check-Host is a modern online tool for <strong>website
			                        monitoring</strong> and checking availability of hosts, DNS records, IP
			                        addresses. It supports the latest technologies such as localized domain names
			                        (both punycode and original formats), hostname IPv6 records (also known as
			                        AAAA record).
			                    </p>
			                    <p>
			                        <strong>
			                        <a href="/ip-info" title="IP geolocation">Info</a>
			                        </strong>
			                        is useful to <strong>check IP and hostname location</strong>: IP range, ISP, organization, country, region, city, ZIP/postal code, time zone and local time. Find out what is known about your host.
			                    </p>
			                    <p>
			                        <strong>
			                        <a href="/check-ping" title="Ping IP, ping website">Ping</a>
			                        </strong>
			                        allows you to test the <strong>reachability of a host</strong> and to measure the round-trip time for messages sent from the originating host to a destination computer.
			                    </p>
			                    <p>
			                        <strong>
			                        <a href="/check-http" title="HTTP monitoring and website checking">HTTP</a>
			                        </strong>
			                        was created for <strong>website monitoring</strong> and checking performance and availability of any URLs from
			                        many countries and datacenters. Allows you to monitor response time from different locations.
			                    </p>
			                    <p>
			                        <strong>
			                        <a href="/check-tcp" title="TCP connect, server check port">TCP port</a>
			                        </strong>
			                        checks the possibility of a <strong>TCP connection</strong> to host's specified port from different locations around the world.
			                        To check the possibility of a <strong>UDP connection</strong> use the
			                        <strong>
			                        <a href="/check-udp" title="UDP connect, check port">UDP port</a>
			                        </strong> check.
			                    </p>
			                    <p>
			                        <strong>
			                        <a href="/check-dns" title="DNS website monitoring">DNS</a>
			                        </strong>
			                        retrieves info about hostname or IP from <strong>nameservers around the world</strong>. You could easily monitor and check updates of DNS records with this service.
			                    </p>
			                    <p>
			                        <strong>
			                        <a href="https://whitelabel.check-host.net/" title="Check-Host.net White Label Solution" target="_blank">White Label Solution</a>
			                        </strong>
			                        is designed for customers who would like to improve their project with the multi-location checking tools of the Check-Host.net.
			                    </p>
			                    <p>
			                        <strong>
			                        <a href="/about/bookmarklet">Bookmarklet</a>
			                        </strong>
			                        allows you to perform checks of websites easlier.
			                        Save bookmarklet in your bookmarks and use anytime it you need.
			                    </p>
			                    <p><a href="/news">Keep in eyes</a> - we are improving this service and getting it better!</p>
			                </div>
			            </div>
			        </div>
			    </div>
			</section>
        </Fragment>
    );
}

export default Content