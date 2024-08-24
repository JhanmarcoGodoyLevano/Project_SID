import { Component } from '@angular/core';
import { ethers } from 'ethers';

@Component({
  selector: 'app-metamask',
  templateUrl: './metamask.component.html',
  styleUrls: ['./metamask.component.css']
})
export class MetamaskComponent {
  account: string | null = null;
  recipient: string = '';
  amount: number | null = null;
  transactionHash: string | null = null;
  errorMessage: string | null = null;

  async connectWallet() {
    try {
      // Hacemos un casting para decirle a TypeScript que `ethereum` es de tipo `any`
      const ethereum = (window as any).ethereum;

      if (!ethereum) {
        this.errorMessage = 'Metamask no está disponible. Por favor, instálalo.';
        return;
      }

      const provider = new ethers.providers.Web3Provider(ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      this.account = await signer.getAddress();
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.errorMessage = 'Error al conectar con Metamask: ' + error.message;
      } else {
        this.errorMessage = 'Error desconocido al conectar con Metamask';
      }
    }
  }

  async sendEth() {
    try {
      if (!this.recipient || !this.amount || !this.account) {
        this.errorMessage = 'Por favor, completa todos los campos.';
        return;
      }

      const ethereum = (window as any).ethereum;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const amountInWei = ethers.utils.parseEther(this.amount.toString());

      const tx = await signer.sendTransaction({
        to: this.recipient,
        value: amountInWei
      });

      this.transactionHash = tx.hash;
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.errorMessage = 'Error al enviar ETH: ' + error.message;
      } else {
        this.errorMessage = 'Error desconocido al enviar ETH';
      }
    }
  }
}
