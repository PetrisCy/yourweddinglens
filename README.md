# Your Wedding Lens

Two separate designs are available locally:

- **Default design, with the editorial package comparison:** http://localhost:3000/
- **New editorial design:** http://localhost:3000/redesign

The default page uses the Redesign package comparison in place of the original three package panels, with enquiry links to its Instagram section. The remaining sections and assets retain the original design. The `/redesign` route uses components and scoped CSS under `src/component/redesign/` and `src/app/redesign/`. The original source is archived in `.backups/original-before-redesign.zip`; see `.backups/README.md` for recovery instructions.

The redesign adds clearer branding and enquiry links, larger upright body text, a package comparison, the two supplied Instagram reels with their actual poster images, expandable FAQs, and a full portrait crop of the Instagram photograph. Reel previews load Instagram only when clicked; direct Instagram links remain available below each preview. Animations remain deferred. Instagram controls whether its embedded posts are available to a visitor.

A Next.js App Router website built from **Your Wedding Lens 2027.pdf**, with TypeScript and CSS Modules. The ten sections follow the reference's order, photographs, typography, copy, prices, and alternating backgrounds. Animations are intentionally deferred.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell with restricted script execution, use `npm.cmd` in place of `npm`.

```sh
npm run typecheck
npm run build
npm start
```

## Contact form

The default page sends name, email, phone number, and message using [Web3Forms](https://web3forms.com/). The configured form access key controls the recipient; use the key associated with `maria.frangeskou@live.com`. Submissions stay on the page and show sending, success, or retry feedback. Success is displayed only when the API confirms acceptance. Failed submissions preserve the entered text. A hidden `botcheck` checkbox helps filter spam, and the visitor's email is used for replies.

Requests time out after 12 seconds with a clear unconfirmed-submission notice. On failure, visitors can email directly using the "Email us instead" link. Form submissions require a working connection to Web3Forms; a timeout alone does not confirm whether a submission reached it.

The Web3Forms access key is designed for client-side use and is configured in `src/component/Contact/Contact.tsx`. The recipient email must be verified through Web3Forms. No mailbox password is used. Send a test enquiry from the website and check the recipient inbox and spam folder before accepting real enquiries; inbox delivery has not been verified from this local checkout. FormSubmit is no longer used.

## Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  component/
    Hero/
    Introduction/
    WeddingMoment/
    Philosophy/
    EssentialPackage/
    ClassicPackage/
    PremiumPackage/
    PackageSection/
    BookingNotes/
    Instagram/
    FAQ/
public/
  fonts/
  images/
```

Every page section has its own component folder and is imported directly into `src/app/page.tsx`. The three packages share `PackageSection` for consistent layout and styling. Section styles live beside the component in CSS Modules; shared colors, fonts, and resets live in `globals.css`.

## Assets and editing

- The three photographs were extracted from the supplied PDF and stored locally in `public/images/`. Replace those files to update the photos, or change the `src` in the corresponding component.
- The original Atteron logo font contains the `W` and `L` used in the supplied monogram. It is only used for those letters.
- Quattrocento and Roboto Mono are served locally, with their OFL license files in `public/fonts/`.
- Text and prices can be edited directly in each section component.
- On mobile, text sections use natural heights and smaller padding; photographs use taller crops. Desktop follows the reference's ten equal-height panels.
- The Instagram handle links to the account supplied in the PDF. There is no booking form or backend in the reference.

The `.reference-tools/` scripts are development utilities used to inspect the source PDF and recover its assets. Their output and npm's local cache are gitignored.
