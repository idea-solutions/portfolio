const CONTACT_INFOS = [
	{
		label: 'Full Name',
		content: 'Nguyen Van Huynh',
	},
	{
		label: 'Other Name',
		content: 'Dyno Nguyen',
	},
	{
		label: 'Birthday',
		content: '24-02-2001',
	},
	{
		label: 'Address',
		content: 'Ho Chi Minh city, Viet Nam',
	},
	{
		label: 'Study',
		content: 'HUTECH -HUTECH University (HUTECH)',
	},
	{
		label: 'Major',
		content: 'Information System - Information Technology',
	},
	{
		label: 'Status',
		content: 'Open to offers',
	},
];

const CONTACT_SOCIAL_NETWORKS = [
	{
		label: 'Phone',
		content: '(+84) 123456789',
		link: '#',
		iconClass: 'fas fa-phone-square-alt',
	},
	{
		label: 'Email',
		content: 'huynh.dev.24@gmail.com',
		link: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tuannguyentn2504@gmail.com',
		iconClass: 'fas fa-envelope',
	},
	{
		label: 'Linkedin',
		content: 'nlatuan',
		link: 'https://www.linkedin.com/in/nlatuan/',
		iconClass: 'fab fa-linkedin',
	},
	{
		label: 'Github',
		content: 'huynhdev24',
		link: 'https://github.com/huynhdev24',
		iconClass: 'fab fa-github',
	},
	{
		label: 'Facebook',
		content: 'TuanNguyen250400',
		link: 'https://www.facebook.com/TuanNguyen250400/',
		iconClass: 'fab fa-facebook',
	},
	{
		label: 'Instagram',
		content: '_dyno.nguyen__',
		link: 'https://www.instagram.com/_dyno.nguyen__/',
		iconClass: 'fab fa-instagram-square',
	},
	{
		label: 'My Blog',
		content: 'Dyno Nguyễn Blog',
		link: 'https://dynonguyen.com',
		iconClass: 'fas fa-blog',
	},
];

function renderContactInfos() {
	let xml = '';
	CONTACT_INFOS.forEach(item => {
		xml += `<li class="contact-info-item">
    <span class="label">${item.label}:&nbsp;&nbsp;</span>
    <span class="content">${item.content}</span>
  </li>`;
	});
	$('#contactInfo').html(xml);
}

function renderSocialNetworks() {
	let xml = '';
	CONTACT_SOCIAL_NETWORKS.forEach(item => {
		xml += `<li>
      <i class="${item.iconClass} contact-icon"></i>
      <span class="label">${item.label}:&nbsp;&nbsp;</span>
      <a href="${item.link}" class="link content">${item.content}</a>
    </li>`;
	});

	xml += `<li>
	<i class="fas fa-download contact-icon"></i>
	<span class="label">Download My CV:&nbsp;&nbsp;</span>
	<a href="/assets/CV_NguyenLeAnhTuan.pdf" download="CV_DynoNguyen.pdf" class="link content">Link</a>
</li>`;

	$('#contactSocialNetwork').html(xml);
}

$(document).ready(function () {
	renderContactInfos();
	renderSocialNetworks();
});
