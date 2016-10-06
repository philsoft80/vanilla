export class Destination {
    position: number;
    name: string;
    distanceFromSun: number;
    description: string;
}

export class DestinationData {
    customPermission: string;
    allowAccess: boolean;
    denyAccess: boolean;
    isBusy: boolean;
    isSelfBusy: boolean;
}