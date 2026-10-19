/* ZyeemZia™ Direct Transmission Hub: one contact component for zyeemzia.com and its pages.
   Usage: <link rel="stylesheet" href="https://zyeemzia.com/transmit.css">
          <section class="tx-mount" data-tx-topic="privacy" data-tx-regarding="Military Office"></section>
          <script src="https://zyeemzia.com/transmit.js" defer></script>
   Copyright © ZyeemZia */
(function () {
  'use strict';
  var ENDPOINT = 'https://formsubmit.co/zyeemz@gmail.com';
  var EMAIL = 'admin@zyeemzia.com';
  var MAX_MSG = 3000, MAX_FILE = 5 * 1024 * 1024;
  var TOPICS = [['apps', 'App support'], ['academy', 'Academy & certificates'], ['partner', 'Partnership'], ['privacy', 'Privacy & data'], ['other', 'Something else']];
  var CODES = [["+93","Afghanistan"],["+355","Albania"],["+213","Algeria"],["+1684","American Samoa"],["+376","Andorra"],["+244","Angola"],["+1264","Anguilla"],["+1268","Antigua & Barbuda"],["+54","Argentina"],["+374","Armenia"],["+297","Aruba"],["+61","Australia"],["+43","Austria"],["+994","Azerbaijan"],["+1242","Bahamas"],["+973","Bahrain"],["+880","Bangladesh"],["+1246","Barbados"],["+375","Belarus"],["+32","Belgium"],["+501","Belize"],["+229","Benin"],["+1441","Bermuda"],["+975","Bhutan"],["+591","Bolivia"],["+387","Bosnia & Herzegovina"],["+267","Botswana"],["+55","Brazil"],["+1284","British Virgin Islands"],["+673","Brunei"],["+359","Bulgaria"],["+226","Burkina Faso"],["+257","Burundi"],["+855","Cambodia"],["+237","Cameroon"],["+1","Canada"],["+238","Cape Verde"],["+1345","Cayman Islands"],["+236","Central African Republic"],["+235","Chad"],["+56","Chile"],["+86","China"],["+57","Colombia"],["+269","Comoros"],["+242","Congo - Brazzaville"],["+243","Congo - Kinshasa"],["+682","Cook Islands"],["+506","Costa Rica"],["+385","Croatia"],["+53","Cuba"],["+599","Curaçao"],["+357","Cyprus"],["+420","Czechia"],["+45","Denmark"],["+253","Djibouti"],["+1767","Dominica"],["+1809","Dominican Republic"],["+593","Ecuador"],["+20","Egypt"],["+503","El Salvador"],["+240","Equatorial Guinea"],["+291","Eritrea"],["+372","Estonia"],["+268","Eswatini"],["+251","Ethiopia"],["+500","Falkland Islands"],["+298","Faroe Islands"],["+679","Fiji"],["+358","Finland"],["+33","France"],["+594","French Guiana"],["+689","French Polynesia"],["+241","Gabon"],["+220","Gambia"],["+995","Georgia"],["+49","Germany"],["+233","Ghana"],["+350","Gibraltar"],["+30","Greece"],["+299","Greenland"],["+1473","Grenada"],["+590","Guadeloupe"],["+1671","Guam"],["+502","Guatemala"],["+224","Guinea"],["+245","Guinea-Bissau"],["+592","Guyana"],["+509","Haiti"],["+504","Honduras"],["+852","Hong Kong"],["+36","Hungary"],["+354","Iceland"],["+91","India"],["+62","Indonesia"],["+98","Iran"],["+964","Iraq"],["+353","Ireland"],["+972","Israel"],["+39","Italy"],["+225","Ivory Coast"],["+1876","Jamaica"],["+81","Japan"],["+962","Jordan"],["+7","Kazakhstan"],["+254","Kenya"],["+686","Kiribati"],["+383","Kosovo"],["+965","Kuwait"],["+996","Kyrgyzstan"],["+856","Laos"],["+371","Latvia"],["+961","Lebanon"],["+266","Lesotho"],["+231","Liberia"],["+218","Libya"],["+423","Liechtenstein"],["+370","Lithuania"],["+352","Luxembourg"],["+853","Macau"],["+389","North Macedonia"],["+261","Madagascar"],["+265","Malawi"],["+60","Malaysia"],["+960","Maldives"],["+223","Mali"],["+356","Malta"],["+692","Marshall Islands"],["+596","Martinique"],["+222","Mauritania"],["+230","Mauritius"],["+262","Mayotte"],["+52","Mexico"],["+691","Micronesia"],["+373","Moldova"],["+377","Monaco"],["+976","Mongolia"],["+382","Montenegro"],["+1664","Montserrat"],["+212","Morocco"],["+258","Mozambique"],["+95","Myanmar"],["+264","Namibia"],["+674","Nauru"],["+977","Nepal"],["+31","Netherlands"],["+687","New Caledonia"],["+64","New Zealand"],["+505","Nicaragua"],["+227","Niger"],["+234","Nigeria"],["+683","Niue"],["+1670","Northern Mariana Islands"],["+47","Norway"],["+968","Oman"],["+92","Pakistan"],["+680","Palau"],["+970","Palestine"],["+507","Panama"],["+675","Papua New Guinea"],["+595","Paraguay"],["+51","Peru"],["+63","Philippines"],["+48","Poland"],["+351","Portugal"],["+1787","Puerto Rico"],["+974","Qatar"],["+262","Réunion"],["+40","Romania"],["+7","Russia"],["+250","Rwanda"],["+1869","St. Kitts & Nevis"],["+1758","St. Lucia"],["+1784","St. Vincent"],["+685","Samoa"],["+378","San Marino"],["+239","São Tomé & Príncipe"],["+966","Saudi Arabia"],["+221","Senegal"],["+381","Serbia"],["+248","Seychelles"],["+232","Sierra Leone"],["+65","Singapore"],["+1721","Sint Maarten"],["+421","Slovakia"],["+386","Slovenia"],["+677","Solomon Islands"],["+252","Somalia"],["+27","South Africa"],["+82","South Korea"],["+211","South Sudan"],["+34","Spain"],["+94","Sri Lanka"],["+249","Sudan"],["+597","Suriname"],["+46","Sweden"],["+41","Switzerland"],["+963","Syria"],["+886","Taiwan"],["+992","Tajikistan"],["+255","Tanzania"],["+66","Thailand"],["+670","Timor-Leste"],["+228","Togo"],["+690","Tokelau"],["+676","Tonga"],["+1868","Trinidad & Tobago"],["+216","Tunisia"],["+90","Turkey"],["+993","Turkmenistan"],["+1649","Turks & Caicos Islands"],["+688","Tuvalu"],["+256","Uganda"],["+380","Ukraine"],["+971","UAE"],["+44","UK"],["+1","US"],["+598","Uruguay"],["+998","Uzbekistan"],["+678","Vanuatu"],["+39","Vatican City"],["+58","Venezuela"],["+84","Vietnam"],["+1340","US Virgin Islands"],["+681","Wallis & Futuna"],["+967","Yemen"],["+260","Zambia"],["+263","Zimbabwe"]];
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var svg = function (p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>'; };
  var ICON = {
    mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
    shield: svg('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'),
    lock: svg('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
    upload: svg('<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>'),
    send: svg('<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>'),
    ok: svg('<circle cx="12" cy="12" r="10"/><path d="M8 12.5l2.5 2.5L16 9.5"/>')
  };
  var count = 0;

  function mount(el) {
    var id = 'tx' + (++count), d = el.dataset;
    var topic = TOPICS.some(function (t) { return t[0] === d.txTopic; }) ? d.txTopic : 'apps';
    var regarding = d.txRegarding || '', source = d.txSource || document.title;
    var lead = d.txLead || 'For operational inquiries, software support, Academy certificates or partnership requests, transmit a message straight to the ZyeemZia command desk.';
    var h = d.txHeading === 'h3' ? 'h3' : 'h2';
    el.classList.add('tx'); if (!el.id) el.id = 'contact';
    el.setAttribute('aria-labelledby', id + '-t');
    el.innerHTML =
      '<div class="tx-head"><span class="tx-status"><i></i>Secure channel · Online</span><' + h + ' id="' + id + '-t">Direct Transmission Hub</' + h + '><p>' + esc(lead) + '</p></div>' +
      '<div class="tx-body"><div class="tx-rail">' +
        '<div class="tx-chan">' + ICON.mail + '<div><b>Command desk</b><span>' + EMAIL + '</span><button type="button" class="tx-copy">Copy email</button></div></div>' +
        (d.txPolicy === 'off' ? '' : '<a class="tx-chan" href="https://policy.zyeemzia.com/">' + ICON.shield + '<div><b>Trust &amp; policy</b><span>Policy hub</span><small>Terms, privacy and security in one place.</small></div></a>') +
        '<div class="tx-chan">' + ICON.lock + '<div><b>Delivery</b><span>Encrypted in transit</span><small>Sent over HTTPS by FormSubmit straight to the ZyeemZia inbox.</small></div></div>' +
      '</div>' +
      '<form class="tx-form" action="' + ENDPOINT + '" method="POST" enctype="multipart/form-data" novalidate>' +
        '<input type="hidden" name="_captcha" value="false"><input type="hidden" name="_template" value="table">' +
        '<input type="hidden" name="_subject" value=""><input type="hidden" name="_next" value="">' +
        '<input type="hidden" name="Source" value="' + esc(source) + '">' + (regarding ? '<input type="hidden" name="Regarding" value="' + esc(regarding) + '">' : '') +
        '<input type="text" name="_honey" class="tx-hp" tabindex="-1" autocomplete="off" aria-hidden="true">' +
        '<fieldset class="tx-topics"><legend class="tx-label">What is this about?</legend>' + TOPICS.map(function (t) {
          return '<label class="tx-topic"><input type="radio" name="Topic" value="' + esc(t[1]) + '"' + (t[0] === topic ? ' checked' : '') + '><span>' + esc(t[1]) + '</span></label>';
        }).join('') + '</fieldset>' +
        (regarding ? '<div class="tx-regarding">Regarding <b>' + esc(regarding) + '</b></div>' : '') +
        '<div class="tx-row">' +
          '<div class="tx-field"><label class="tx-label" for="' + id + '-name">Full name</label><input id="' + id + '-name" name="Name" autocomplete="name" maxlength="80" required placeholder="Your name"><div class="tx-err">Please enter your name.</div></div>' +
          '<div class="tx-field"><label class="tx-label" for="' + id + '-email">Email</label><input id="' + id + '-email" type="email" name="Email" autocomplete="email" maxlength="120" required placeholder="you@example.com"><div class="tx-err">Please enter a valid email address.</div></div>' +
        '</div>' +
        '<div class="tx-field"><label class="tx-label" for="' + id + '-phone">Phone <em>(optional)</em></label><div class="tx-phone"><select name="Country Code" aria-label="Country calling code">' +
          CODES.map(function (c) { return '<option value="' + c[0] + '"' + (c[1] === 'Bangladesh' ? ' selected' : '') + '>' + c[0] + ' · ' + esc(c[1]) + '</option>'; }).join('') +
        '</select><input id="' + id + '-phone" type="tel" name="Phone" inputmode="tel" autocomplete="tel-national" maxlength="20" placeholder="1700 000000"></div></div>' +
        '<div class="tx-field"><label class="tx-label" for="' + id + '-msg">Message <span class="tx-count" aria-hidden="true">0 / ' + MAX_MSG + '</span></label><textarea id="' + id + '-msg" name="Message" rows="6" maxlength="' + MAX_MSG + '" required placeholder="Tell us what you need: the more detail, the faster we can help."></textarea><div class="tx-err">Please write at least 10 characters.</div></div>' +
        '<div class="tx-field tx-attach"><span class="tx-label">Attachment <em>(optional)</em></span><label class="tx-drop">' + ICON.upload + '<div><b>Drop a file here or browse</b><small>PDF, Word or image · up to 5 MB</small></div><input type="file" name="attachment" accept="image/*,.pdf,.doc,.docx" aria-label="Attach a file"></label>' +
          '<div class="tx-file"><span></span><small></small><button type="button">Remove</button></div><div class="tx-err">That file is larger than 5 MB. Please attach a smaller one.</div></div>' +
        '<div class="tx-foot"><p class="tx-note">Your message goes only to ZyeemZia. It is never shared or used for marketing.</p><button class="tx-send" type="submit">' + ICON.send + '<span>Transmit message</span></button></div>' +
      '</form></div>' +
      '<div class="tx-done" role="status" tabindex="-1">' + ICON.ok + '<h3>Transmission received</h3><p>Thank you. Your message is on its way to the ZyeemZia command desk, and the reply will come to the email address you gave.</p><button type="button" class="tx-again">Send another message</button></div>';
    wire(el);
    if (/[?&]sent=1(&|$)/.test(location.search)) {
      el.classList.add('sent');
      setTimeout(function () { var done = el.querySelector('.tx-done'); el.scrollIntoView({ block: 'start' }); if (done) done.focus({ preventScroll: true }); }, 60);
    }
  }

  function wire(el) {
    var form = el.querySelector('.tx-form'), msg = form.querySelector('textarea'), counter = form.querySelector('.tx-count');
    var file = form.querySelector('input[type=file]'), drop = form.querySelector('.tx-drop'), chip = form.querySelector('.tx-file'), attach = form.querySelector('.tx-attach');
    var phone = form.querySelector('input[type=tel]'), code = form.querySelector('select'), send = form.querySelector('.tx-send');

    msg.addEventListener('input', function () {
      var n = msg.value.length; counter.textContent = n + ' / ' + MAX_MSG; counter.classList.toggle('warn', n > MAX_MSG * 0.9);
      if (n >= 10) msg.closest('.tx-field').classList.remove('bad');
    });
    form.querySelectorAll('input[name=Name], input[name=Email]').forEach(function (i) { i.addEventListener('input', function () { if (valid(i)) i.closest('.tx-field').classList.remove('bad'); }); });

    var size = function (b) { return b > 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB'; };
    function showFile() {
      var f = file.files && file.files[0];
      attach.classList.remove('bad');
      if (!f) { chip.classList.remove('on'); return; }
      if (f.size > MAX_FILE) { file.value = ''; chip.classList.remove('on'); attach.classList.add('bad'); return; }
      chip.querySelector('span').textContent = f.name; chip.querySelector('small').textContent = size(f.size); chip.classList.add('on');
    }
    file.addEventListener('change', showFile);
    chip.querySelector('button').addEventListener('click', function () { file.value = ''; showFile(); file.focus(); });
    ['dragenter', 'dragover'].forEach(function (t) { drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.add('over'); }); });
    ['dragleave', 'drop'].forEach(function (t) { drop.addEventListener(t, function () { drop.classList.remove('over'); }); });
    drop.addEventListener('drop', function (e) { e.preventDefault(); if (e.dataTransfer && e.dataTransfer.files.length) { try { file.files = e.dataTransfer.files; } catch (x) { /* older browsers: use browse */ } showFile(); } });

    el.querySelector('.tx-copy').addEventListener('click', function (e) {
      var b = e.currentTarget, done = function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy email'; }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(EMAIL).then(done, function () { location.href = 'mailto:' + EMAIL; });
      else location.href = 'mailto:' + EMAIL;
    });
    el.querySelector('.tx-again').addEventListener('click', function () {
      el.classList.remove('sent');
      try { history.replaceState(null, '', location.pathname + '#' + el.id); } catch (x) { /* ignore */ }
      var first = form.querySelector('input[name=Name]'); if (first) first.focus();
    });

    form.addEventListener('submit', function (e) {
      var bad = [];
      var nameI = form.querySelector('input[name=Name]'), mailI = form.querySelector('input[name=Email]');
      [[nameI, valid(nameI)], [mailI, valid(mailI)], [msg, msg.value.trim().length >= 10]].forEach(function (p) {
        p[0].closest('.tx-field').classList.toggle('bad', !p[1]); if (!p[1]) bad.push(p[0]);
      });
      if (form.querySelector('input[name=_honey]').value) bad.push(null);
      if (bad.length) { e.preventDefault(); if (bad[0]) bad[0].focus(); return; }
      var t = form.querySelector('input[name=Topic]:checked'), reg = form.querySelector('input[name=Regarding]');
      form.querySelector('input[name=_subject]').value = 'ZyeemZia · ' + (t ? t.value : 'Message') + (reg ? ' · ' + reg.value : '') + ' · ' + nameI.value.trim();
      form.querySelector('input[name=_next]').value = location.origin + location.pathname + '?sent=1#' + el.id;
      // an empty phone number sends neither the number nor its country code
      code.disabled = !phone.value.trim(); phone.disabled = !phone.value.trim();
      send.disabled = true; send.querySelector('span').textContent = 'Transmitting…';
      // a page restored from the back button gets a working form again
      addEventListener('pageshow', function () { send.disabled = false; send.querySelector('span').textContent = 'Transmit message'; code.disabled = false; phone.disabled = false; }, { once: true });
    });
  }

  function valid(i) {
    var v = i.value.trim();
    if (i.type === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    return v.length >= 2;
  }

  function init() { Array.prototype.forEach.call(document.querySelectorAll('.tx-mount'), function (el) { if (!el.classList.contains('tx')) mount(el); }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
