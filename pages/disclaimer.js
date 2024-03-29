import React from 'react';
import { BackgroundNoodle, BackgroundTriangle } from '../components/Containers';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/layout/Header';
import NoodleScene from '../components/scene/NoodleScene';
import NoodleSceneBg from '../components/scene/NoodleSceneBg';
import Triangles from '../components/scene/Triangles';
import { SectionHeaderBrightAlt } from '../components/sections/partials/SectionHeader';

const Disclaimer = () => {


  const sectionHeader = {
    title: '1delta DAO Terms of Service',
    paragraph: 'Last modified: January 10, 2023.'
  };

  return (
    <section style={{ overflowY: 'hidden' }}>
      <BackgroundNoodle>
        <NoodleSceneBg />
      </BackgroundNoodle>


      <GlobalStyles />
      <Header />
      <section >
        <div className="container-sm" style={{ width: '90%', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginTop: '80px' }}>
            <SectionHeaderBrightAlt data={sectionHeader} className="center-content text-color-transition-avg" style={{ marginTop: '80px' }} />
            <p className="m-0 text-color-transition-avg">
              These Terms of Service (the “Agreement”) explains the terms and conditions by which you may access and use https://app.1delta.io, a website-hosted user interface (the “Interface” or “App”) provided by 1delta Labs (“we”, “our”, or “us”). You must read this Agreement carefully as it governs your use of the Interface. By accessing or using the Interface, you signify that you have read, understand, and agree to be bound by this Agreement in its entirety. If you do not agree, you are not authorized to access or use the Interface and should not use the Interface.
              NOTICE: This Agreement contains important information, including a binding arbitration provision and a class action waiver, both of which impact your rights as to how disputes are resolved. The Interface is only available to you — and you should only access the Interface — if you agree completely with these terms.
            </p>
            <h3 className="text-color-transition-avg">Introduction</h3>
            <p className="m-0 text-color-transition-avg">

              The Interface provides access to a decentralized protocol on various public blockchains, including but not limited to Ethereum, that allow users to trade certain compatible digital assets (“the 1delta protocol” or the “Protocol”). The Interface is one, but not the exclusive, means of accessing the Protocol.
              To access the Interface, you must use non-custodial wallet software, which allows you to interact with public blockchains. Your relationship with that non-custodial wallet provider is governed by the applicable terms of service of that third party, not this Agreement. Wallets are not operated by, maintained by, or affiliated with us, and we do not have custody or control over the contents of your wallet and have no ability to retrieve or transfer its contents. By connecting your wallet to our Interface, you agree to be bound by this Agreement and all of the terms incorporated herein by reference.

            </p>

            <h3 className="text-color-transition-avg">Modification of this Agreement</h3>
            <p className="m-0 text-color-transition-avg">
              We reserve the right, in our sole discretion, to modify this Agreement from time to time. If we make any material modifications, we will notify you by updating the date at the top of the Agreement and by maintaining a current version of the Agreement at https://1delta,io/terms-of-service. All modifications will be effective when they are posted, and your continued accessing or use of the Interface will serve as confirmation of your acceptance of those modifications. If you do not agree with any modifications to this Agreement, you must immediately stop accessing and using the Interface.
            </p>
            <h3 className="text-color-transition-avg">Description of Services provided through the Interface</h3>
            <p className="m-0 text-color-transition-avg">
              The Interface provides a web or mobile-based means of accessing the Protocol. The Interface is distinct from the Protocol and is one, but not the exclusive, means of accessing the Protocol. The Protocol itself has three versions, designated as v1, v2, and v3, each of which comprises open-source or source-available self-executing smart contracts that are deployed on various public blockchains, such as Ethereum. 1delta Labs does not control or operate any version of the Protocol on any blockchain network. By using the Interface, you understand that you are not buying or selling digital assets from us and that we do not operate any liquidity pools on the Protocol or control trade execution on the Protocol. When traders pay fees for trades, those fees accrue to liquidity providers for the Protocol. As a general matter, Labs is not a liquidity provider into Protocol liquidity pools and liquidity providers are independent third parties. The Protocol was initially deployed on the Ethereum blockchain, and has since been deployed on several other blockchain networks including by parties other than 1delta Labs. Deployments on other networks typically make use of cross-chain bridges, which allow assets native to one blockchain to be transferred to another blockchain. Please note that digital assets that have been “bridged” or “wrapped” to operate on other blockchain networks (including to blockchains compatible with the Ethereum Virtual Machine that are designed to ensure the Ethereum blockchain can effectively process more transactions or other blockchains that are frequently referred to as “Layer 2” solutions) are distinct from the original Ethereum mainnet asset.
            </p>
            <p className="m-0 text-color-transition-avg">
              Identification of the copyrighted work(s), trademark, publicity rights, or other intellectual property rights that you claim is being infringed;
              Identification of the allegedly infringing material that is requested to be removed, including a description of the specific location (i.e., urls) on the Interface of the material claimed to be infringing, so that we may locate the material;
            </p>
            <p className="m-0 text-color-transition-avg">
              Your contact information – including your full legal name and email address;
              A declaration that contains all of the following:
              <br />
              A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the intellectual property rights owner, its agent, or the law;
              <br />
              A statement that the information in the notice is accurate;
              <br />
              A statement under penalty of perjury that you are authorized to act on behalf of the intellectual property owner of the intellectual property that is allegedly being infringed.
              <br />
              Your physical or electronic signature.If you believe that your content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner’s agent, or pursuant to the law, to upload and use the removed content, you may submit a written counter-notice to us or our Copyright Agent.
            </p>
            <h3 className="text-color-transition-avg">Additional Rights</h3>
            <p className="m-0 text-color-transition-avg">
              We reserve the following rights, which do not constitute obligations of ours: (a) with or without notice to you, to modify, substitute, eliminate or add to the Interface; (b) to review, modify, filter, disable, delete and remove any and all content and information from the Interface; and (c) to cooperate with any law enforcement, court or government investigation or order or third party requesting or directing that we disclose information or content or information that you provide.
            </p>
            <h3 className="text-color-transition-avg"> Prohibited Activity</h3>
            <p className="m-0 text-color-transition-avg">
              You agree not to engage in, or attempt to engage in, any of the following categories of prohibited activity in relation to your access and use of the Interface:
            </p>
            <p className="m-0 text-color-transition-avg">
              Intellectual Property Infringement Activity that infringes on or violates any copyright, trademark, service mark, patent, right of publicity, right of privacy, or other proprietary or intellectual property rights under the law.
              Cyberattack. Activity that seeks to interfere with or compromise the integrity, security, or proper functioning of any computer, server, network, personal device, or other information technology system, including (but not limited to) the deployment of viruses and denial of service attacks.
              Fraud and Misrepresentation. Activity that seeks to defraud us or any other person or entity, including (but not limited to) providing any false, inaccurate, or misleading information in order to unlawfully obtain the property of another.
              Market Manipulation. Activity that violates any applicable law, rule, or regulation concerning the integrity of trading markets, including (but not limited to) the manipulative tactics commonly known as “rug pulls”, pumping and dumping, and wash trading.
              Securities and Derivatives Violations. Activity that violates any applicable law, rule, or regulation concerning the trading of securities or derivatives, including (but not limited to) the unregistered offering of securities and the offering of leveraged and margined commodity products to retail customers in the United States.
              Sale of Stolen Property. Buying, selling, or transferring of stolen items, fraudulently obtained items, items taken without authorization, and/or any other illegally obtained items.
              Data Mining or Scraping. Activity that involves data mining, robots, scraping, or similar data gathering or extraction methods of content or information from the Interface.
              Objectionable Content. Activity that involves soliciting information from anyone under the age of 18 or that is otherwise harmful, threatening, abusive, harassing, tortious, excessively violent, defamatory, vulgar, obscene, pornographic, libelous, invasive of another’s privacy, hateful, discriminatory, or otherwise objectionable.
              Any Other Unlawful Conduct. Activity that violates any applicable law, rule, or regulation of the United States or another relevant jurisdiction, including (but not limited to) the restrictions and regulatory requirements imposed by U.S. law.
            </p>

            <h3 className="text-color-transition-avg">Not Registered with the SEC or Any Other Agency</h3>

            <p className="m-0 text-color-transition-avg">
              We are not registered with the U.S. Securities and Exchange Commission as a national securities exchange or in any other capacity. You understand and acknowledge that we do not broker trading orders on your behalf nor do we collect or earn fees from your trades on the Interface. We also do not facilitate the execution or settlement of your trades, which occur entirely on the public distributed on public distributed blockchains like Ethereum. As a result, we do not (and cannot) guarantee market best pricing or best execution through the Interface or when using our Auto Routing feature, which routes trades across liquidity pools on the Protocol only. Any references in the Interface to “best price” do not constitute a representation or warranty about pricing available through the Interface, on the Protocol, or elsewhere.
              <br />
              Non-Solicitation; No Investment Advice
              You agree and understand that: (a) all trades you submit through the Interface are considered unsolicited, which means that they are solely initiated by you; (b) you have not received any investment advice from us in connection with any trades, including those you place via our Auto Routing API; and
              <br />
              (c) we do not conduct a suitability review of any trades you submit.
              We may provide information about tokens in the Interface sourced from third-party data partners through features such as rarity scores, token explorer or token lists (which includes the 1delta Labs default token list and 1delta Labs expanded list hosted at tokenlists.org). We may also provide warning labels for certain tokens. The provision of informational materials does not make trades in those tokens solicited; we are not attempting to induce you to make any purchase as a result of information provided. All such information provided by the Interface is for informational purposes only and should not be construed as investment advice or a recommendation that a particular token is a safe or sound investment. You should not take, or refrain from taking, any action based on any information contained in the Interface. By providing token information for your convenience, we do not make any investment recommendations to you or opine on the merits of any transaction or opportunity. You alone are responsible for determining whether any investment, investment strategy or related transaction is appropriate for you based on your personal investment objectives, financial circumstances, and risk tolerance.
              Non-Custodial and No Fiduciary Duties
              The Interface is a purely non-custodial application, meaning we do not ever have custody, possession, or control of your digital assets at any time. It further means you are solely responsible for the custody of the cryptographic private keys to the digital asset wallets you hold and you should never share your wallet credentials or seed phrase with anyone. We accept no responsibility for, or liability to you, in connection with your use of a wallet and make no representations or warranties regarding how the Interface will operate with any specific wallet. Likewise, you are solely responsible for any associated wallet and we are not liable for any acts or omissions by you in connection with or as a result of your wallet being compromised.
              This Agreement is not intended to, and does not, create or impose any fiduciary duties on us. To the fullest extent permitted by law, you acknowledge and agree that we owe no fiduciary duties or liabilities to you or any other party, and that to the extent any such duties or liabilities may exist at law or in equity, those duties and liabilities are hereby irrevocably disclaimed, waived, and eliminated. You further agree that the only duties and obligations that we owe you are those set out expressly in this Agreement.
            </p>

            <h3 className="text-color-transition-avg">Compliance and Tax Obligations</h3>
            <p className="m-0 text-color-transition-avg">
              The Interface may not be available or appropriate for use in your jurisdiction. By accessing or using the Interface, you agree that you are solely and entirely responsible for compliance with all laws and regulations that may apply to you.
              Specifically, your use of the Interface or the Protocol may result in various tax consequences, such as income or capital gains tax, value-added tax, goods and services tax, or sales tax in certain jurisdictions.
              It is your responsibility to determine whether taxes apply to any transactions you initiate or receive and, if so, to report and/or remit the correct tax to the appropriate tax authority.
            </p>


            <h3 className="text-color-transition-avg"> Assumption of Risk</h3>
            <p className="m-0 text-color-transition-avg">
              By accessing and using the Interface, you represent that you are financially and technically sophisticated enough to understand the inherent risks associated with using cryptographic and blockchain-based systems, and that you have a working knowledge of the usage and intricacies of digital assets such as ether (ETH), so-called stablecoins, and other digital tokens such as those following the Ethereum Token Standard (ERC-20).
              In particular, you understand that the markets for these digital assets are nascent and highly volatile due to risk factors including (but not limited to) adoption, speculation, technology, security, and regulation. You understand that anyone can create a token, including fake versions of existing tokens and tokens that falsely claim to represent projects, and acknowledge and accept the risk that you may mistakenly trade those or other tokens. So-called stablecoins may not be as stable as they purport to be, may not be fully or adequately collateralized, and may be subject to panics and runs.
              Further, you understand that smart contract transactions automatically execute and settle, and that blockchain-based transactions are irreversible when confirmed. You acknowledge and accept that the cost and speed of transacting with cryptographic and blockchain-based systems such as Ethereum are variable and may increase dramatically at any time. You further acknowledge and accept the risk of selecting to trade in Expert Modes, which can expose you to potentially significant price slippage and higher costs.
              If you act as a liquidity provider to the Protocol through the Interface, you understand that your digital assets may lose some or all of their value while they are supplied to the Protocol through the Interface due to the fluctuation of prices of tokens in a trading pair or liquidity pool.
              Finally, you understand that we do not create, own, or operate cross-chain bridges and we do not make any representation or warranty about the safety or soundness of any cross-chain bridge, including its use for 1delta governance.
              In summary, you acknowledge that we are not responsible for any of these variables or risks, do not own or control the Protocol, and cannot be held liable for any resulting losses that you experience while accessing or using the Interface. Accordingly, you understand and agree to assume full responsibility for all of the risks of accessing and using the Interface to interact with the Protocol.
            </p>
            <h3 className="text-color-transition-avg">Third-Party Resources and Promotions </h3>
            <p className="m-0 text-color-transition-avg">
              The Interface may contain references or links to third-party resources, including (but not limited to) information, materials, products, or services, that we do not own or control. In addition, third parties may offer promotions related to your access and use of the Interface. We do not approve, monitor, endorse, warrant or assume any responsibility for any such resources or promotions. If you access any such resources or participate in any such promotions, you do so at your own risk, and you understand that this Agreement does not apply to your dealings or relationships with any third parties. You expressly relieve us of any and all liability arising from your use of any such resources or participation in any such promotions.
            </p>
            <h3 className="text-color-transition-avg">Release of Claims</h3>
            <p className="m-0 text-color-transition-avg">
              You expressly agree that you assume all risks in connection with your access and use of the Interface. You further expressly waive and release us from any and all liability, claims, causes of action, or damages arising from or in any way relating to your use of the Interface. If you are a California resident, you waive the benefits and protections of California Civil Code § 1542, which provides: "[a] general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party."
              Indemnity

              You agree to hold harmless, release, defend, and indemnify us and our officers, directors, employees, contractors, agents, affiliates, and subsidiaries from and against all claims, damages, obligations, losses, liabilities, costs, and expenses arising from: (a) your access and use of the Interface; (b) your violation of any term or condition of this Agreement, the right of any third party, or any other applicable law, rule, or regulation; and (c) any other party's access and use of the Interface with your assistance or using any device or account that you own or control.
              No Warranties
              The Interface is provided on an "AS IS" and "AS AVAILABLE" basis. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ANY REPRESENTATIONS AND WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING (BUT NOT LIMITED TO) THE WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. You acknowledge and agree that your use of the Interface is at your own risk. We do not represent or warrant that access to the Interface will be continuous, uninterrupted, timely, or secure; that the information contained in the Interface will be accurate, reliable, complete, or current; or that the Interface will be free from errors, defects, viruses, or other harmful elements. No advice, information, or statement that we make should be treated as creating any warranty concerning the Interface. We do not endorse, guarantee, or assume responsibility for any advertisements, offers, or statements made by third parties concerning the Interface.
              Similarly, the Protocol is provided "AS IS", at your own risk, and without warranties of any kind. Although we contributed to the initial code for the Protocol, we do not provide, own, or control the Protocol, which is run autonomously without any headcount by smart contracts deployed on various blockchains. Upgrades and modifications to the Protocol are generally managed in a community-driven way by holders of the UNI governance token. No developer or entity involved in creating the Protocol will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of, the Protocol, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value. We do not endorse, guarantee, or assume responsibility for any advertisements, offers, or statements made by third parties concerning the Interface.
            </p>
            <h3 className="text-color-transition-avg">Limitation of Liability</h3>
            <p className="m-0 text-color-transition-avg">
              UNDER NO CIRCUMSTANCES SHALL WE OR ANY OF OUR OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, AFFILIATES, OR SUBSIDIARIES BE LIABLE TO YOU FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING (BUT NOT LIMITED TO) DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE PROPERTY, ARISING OUT OF OR RELATING TO ANY ACCESS OR USE OF THE INTERFACE, NOR WILL WE BE RESPONSIBLE FOR ANY DAMAGE, LOSS, OR INJURY RESULTING FROM HACKING, TAMPERING, OR OTHER UNAUTHORIZED ACCESS OR USE OF THE INTERFACE OR THE INFORMATION CONTAINED WITHIN IT. WE ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY: (A) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT; (B) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM ANY ACCESS OR USE OF THE INTERFACE; (C) UNAUTHORIZED ACCESS OR USE OF ANY SECURE SERVER OR DATABASE IN OUR CONTROL, OR THE USE OF ANY INFORMATION OR DATA STORED THEREIN; (D) INTERRUPTION OR CESSATION OF FUNCTION RELATED TO THE INTERFACE; (E) BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH THE INTERFACE; (F) ERRORS OR OMISSIONS IN, OR LOSS OR DAMAGE INCURRED AS A RESULT OF THE USE OF, ANY CONTENT MADE AVAILABLE THROUGH THE INTERFACE; AND (G) THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY.
            </p>

            <h3 className="text-color-transition-avg"> Dispute Resolution</h3>
            <p className="m-0 text-color-transition-avg">
              We will use our best efforts to resolve any potential disputes through informal, good faith negotiations. If a potential dispute arises, you must contact us by sending an email to legal@1delta,io so that we can attempt to resolve it without resorting to formal dispute resolution. If we aren't able to reach an informal resolution within sixty days of your email, then you and we both agree to resolve the potential dispute according to the process set forth below.
              <br />
              Any claim or controversy arising out of or relating to the Interface, this Agreement, or any other acts or omissions for which you may contend that we are liable, including (but not limited to) any claim or controversy as to arbitrability ("Dispute"), shall be finally and exclusively settled by arbitration under the JAMS Optional Expedited Arbitration Procedures. You understand that you are required to resolve all Disputes by binding arbitration. The arbitration shall be held on a confidential basis before a single arbitrator, who shall be selected pursuant to JAMS rules. The arbitration will be held in New York, New York, unless you and we both agree to hold it elsewhere. Unless we agree otherwise, the arbitrator may not consolidate your claims with those of any other party. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.
            </p>

            <h3 className="text-color-transition-avg">Class Action and Jury Trial Waiver</h3>
            <p className="m-0 text-color-transition-avg">
              You must bring any and all Disputes against us in your individual capacity and not as a plaintiff in or member of any purported class action, collective action, private attorney general action, or other representative proceeding. This provision applies to class arbitration. You and we both agree to waive the right to demand a trial by jury.
            </p>

            <h3 className="text-color-transition-avg">Governing Law</h3>
            <p className="m-0 text-color-transition-avg">
              You agree that the laws of the State of New York, without regard to principles of conflict of laws, govern this Agreement and any Dispute between you and us. You further agree that the Interface shall be deemed to be based solely in the State of New York, and that although the Interface may be available in other jurisdictions, its availability does not give rise to general or specific personal jurisdiction in any forum outside the State of New York. Any arbitration conducted pursuant to this Agreement shall be governed by the Federal Arbitration Act. You agree that the federal and state courts of New York County, New York are the proper forum for any appeals of an arbitration award or for court proceedings in the event that this Agreement's binding arbitration clause is found to be unenforceable.
            </p>

            <h3 className="text-color-transition-avg">Entire Agreement</h3>
            <p className="m-0 text-color-transition-avg">
              These terms constitute the entire agreement between you and us with respect to the subject matter hereof. This Agreement supersedes any and all prior or contemporaneous written and oral agreements, communications and other understandings (if any) relating to the subject matter of the terms.
            </p>


          </div>

        </div>
        <Footer />
      </section>
    </section>
  );
}

export default Disclaimer;